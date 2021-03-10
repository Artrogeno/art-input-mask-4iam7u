import { Component, VERSION } from "@angular/core";
import { VERSION as MATERIAL_VERSION } from "@angular/cdk";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  material = MATERIAL_VERSION.full
}
