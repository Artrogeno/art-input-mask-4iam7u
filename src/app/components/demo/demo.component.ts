import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { IMask } from "../../shared/interfaces/mask";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  public formDemo: FormGroup;

  public phone: string | number;

  public inputMask: IMask = {
    mask: "+9 (999) 999-9999",
    placeholder: "+0 (000) 000-0000"
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formDemo = this.fb.group({
      phone: [null]
    });

    setTimeout(() => this.updateForm(), 1000);

    this.formDemo.controls.phone.valueChanges.subscribe(
      phone => (this.phone = phone)
    );
  }

  private updateForm(): void {
    this.formDemo.controls.phone.setValue("12345678901");
  }
}
