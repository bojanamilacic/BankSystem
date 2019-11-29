import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LogInAuthenticationService {
  readonly rootURL = 'https://localhost:44309/api';
  constructor(private registrationForm: FormBuilder, private http: HttpClient) { }

  formModel = this.registrationForm.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.registrationForm.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(comparePasswordForm: FormGroup) {
    const confirmPswrdCtrl = comparePasswordForm.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (comparePasswordForm.get('Password').value != confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      }
      else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }
  userRegister(){
    var userModel = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.rootURL + '/Users/Register', userModel);
  }
  login(formData) {
    return this.http.post(this.rootURL + '/Users/Login', formData);
  }
  getUserProfile() {
    return this.http.get(this.rootURL + '/UserProfile');
  }
}
