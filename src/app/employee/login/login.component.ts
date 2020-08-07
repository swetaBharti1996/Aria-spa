import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
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
      passwd: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
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
