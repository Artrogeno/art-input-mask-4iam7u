import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";
import { NgxMaskDirective } from "./directives/ngx-mask.directive";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [MaterialModule, NgxMaskDirective, ToolbarComponent],
  entryComponents: [ToolbarComponent],
  declarations: [ToolbarComponent, NgxMaskDirective]
})
export class SharedModule {}
