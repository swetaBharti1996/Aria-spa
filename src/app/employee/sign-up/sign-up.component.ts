import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  regConfig: FormGroup;
  submitted = false;
  showPassword = false;
  alert = {};
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.regConfig = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
      passwd: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  hasError = (controlName: string, errorName: string) => {
    return ((this.submitted || this.regConfig.controls[controlName].touched) && this.regConfig.controls[controlName].hasError(errorName));
  }

  
};
