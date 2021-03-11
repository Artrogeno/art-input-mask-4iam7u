import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/material.module";
import { DemoComponent } from "./components/demo/demo.component";
import { NgxMaskDirective } from "./shared/directives/ngx-mask.directive";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [AppComponent, DemoComponent, NgxMaskDirective],
  exports: [NgxMaskDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
