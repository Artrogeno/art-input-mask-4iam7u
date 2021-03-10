import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';

import  { valueToFormat } from '../utils/mask'

@Directive({
    selector: '[ngxMask]',
})
export class MaskDirective implements OnInit {

    @Input('ngxMask') ngxMask: string;

    private inputElem: HTMLInputElement;
    private _lastMaskedValue = '';

    constructor(
        private el: ElementRef,
    ) { }

    ngOnInit() {
        this.inputElem = this.el.nativeElement;
    }

    @HostListener('input')
    onInput() {
        this.inputElem.value = this._maskValue(this.inputElem.value);
    }

    private _maskValue(val: string): string {
        if (!val || !this.ngxMask || val === this._lastMaskedValue) {
            return val;
        }

        const maskedVal = this._lastMaskedValue =
            valueToFormat(
                val,
                this.ngxMask,
                this._lastMaskedValue.length > val.length,
                this._lastMaskedValue);

        return maskedVal;
    }

}