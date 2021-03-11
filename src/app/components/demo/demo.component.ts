import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  public formDemo: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formDemo = this.fb.group({
      phone: [null]
    });

    setTimeout(() => this.updateForm(), 1000);

    this.formDemo.controls.phone.valueChanges.subscribe(val =>
      console.log(val)
    );
  }

  private updateForm(): void {
    this.formDemo.controls.phone.setValue("12345678901");
  }
}
