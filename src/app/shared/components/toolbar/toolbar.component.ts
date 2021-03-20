import { Component, OnInit } from "@angular/core";

import { MenuService } from "../../services/menu.service";

@Component({
  selector: "toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {

  constructor(private menuService: MenuService) {}

  ngOnInit() {}

  toggle(): void {
    this.menuService.toggle();
  }
}
