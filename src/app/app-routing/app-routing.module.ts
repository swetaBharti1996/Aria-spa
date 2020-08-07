import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  //   {
  //     path: "app",
  //     loadChildren: "../post-login/post-login.module#PostLoginModule"
  //   },
  {
    path: "app",
    loadChildren: "../employee/employee.module#EmployeeModule",
  },

  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
