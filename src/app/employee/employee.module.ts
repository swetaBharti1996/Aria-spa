import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeRoutingModule } from "./employee-routing/employee-routing.module";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { TableComponent } from "./table/table.component";
import { CustomerService } from "../employee/service/customer.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
  ],
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    TableComponent,
  ],
})
export class EmployeeModule {}
