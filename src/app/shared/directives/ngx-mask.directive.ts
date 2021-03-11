import { Directive, HostListener, Input } from "@angular/core";
import { NgControl } from "@angular/forms";
import * as MASK from "./mask";

@Directive({
  selector: "[formControlName][ngxMask]"
})
@Directive({
  selector: "[ngxMask]"
})
export class NgxMaskDirective {
  @Input("ngxMask") ngxMask: string;

  constructor(public ngControl: NgControl) {}

  @HostListener("ngModelChange", ["$event"])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener("keydown.backspace", ["$event"])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event, backspace) {
    let newVal = event.replace(/\D/g, "");
    newVal = MASK.mask(newVal, this.ngxMask);

    console.log(this.ngxMask);
    this.ngControl.valueAccessor.writeValue(newVal);
  }
}
