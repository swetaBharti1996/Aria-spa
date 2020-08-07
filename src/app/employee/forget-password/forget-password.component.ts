import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.css"],
})
export class ForgetPasswordComponent implements OnInit {
  regConfig: FormGroup;
  submitted = false;
  showPassword = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.regConfig = this.formBuilder.group({
      email: [
        "",
        [Validators.required, Validators.maxLength(50), Validators.email],
      ],
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  hasError = (controlName: string, errorName: string) => {
    return (
      (this.submitted || this.regConfig.controls[controlName].touched) &&
      this.regConfig.controls[controlName].hasError(errorName)
    );
  };
}
