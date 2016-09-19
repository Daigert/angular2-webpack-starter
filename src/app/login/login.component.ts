import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {UserValidationService} from './user-validation';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.css']
})

export class Login implements OnInit {
  public loginForm:FormGroup;
  logInError:boolean = false;

  constructor(private fb:FormBuilder,
              public validationService:UserValidationService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'login': [
        '', [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern('[A-Za-z]+')
        ]
      ],
      'password': [
        '', [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern('[A-Za-z0-9]+')
        ]
      ]
    });
  }

  login(login, password) {
    this.validationService.validateUser(login, password).subscribe(res => {
      this.logInError = false;
    }, error => {
      this.loginForm.controls['password'].setValue('');
      this.logInError = true;
    })
  }

  ngOnDestroy() {
  }
}
