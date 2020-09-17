import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeRoutingModule } from "./employee-routing/employee-routing.module";
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { QuestionComponent } from './question/question.component';
import { IphoneCardComponent } from './iphone-card/iphone-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
  ],
  exports:[ HeaderComponent,CardComponent,IphoneCardComponent],
  declarations: [MainComponent, HeaderComponent, CardComponent, QuestionComponent, IphoneCardComponent],
})
export class EmployeeModule {}
