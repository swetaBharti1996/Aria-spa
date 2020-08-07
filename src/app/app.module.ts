import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app-component/app.component";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
