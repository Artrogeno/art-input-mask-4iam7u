import { Component, VERSION } from "@angular/core";
import { VERSION as MATERIAL_VERSION } from "@angular/cdk";

import { MenuService } from "./shared/services/menu.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  material = MATERIAL_VERSION.full;
  menu: boolean;

  constructor(private menuService: MenuService) {
    this.menuService.menuCurrent.subscribe(({ isOpen }: boolean) => {
      this.menu = isOpen;
    });
  }
}
