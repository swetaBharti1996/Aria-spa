import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeRoutingModule } from "./employee-routing/employee-routing.module";
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
  ],
  exports:[ HeaderComponent],
  declarations: [MainComponent, HeaderComponent],
})
export class EmployeeModule {}
