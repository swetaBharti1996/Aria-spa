import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "../main/main.component";
// import { LoginComponent } from "../login/login.component";
// import { SignUpComponent } from "../sign-up/sign-up.component";
// import { ForgetPasswordComponent } from "../forget-password/forget-password.component";
// import { TableComponent } from "../table/table.component";

const routes: Routes = [
  // { path: "login", component: LoginComponent },
  // { path: "signup", component: SignUpComponent },
  // { path: "forget-password", component: ForgetPasswordComponent },
  { path: "main", component: MainComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
