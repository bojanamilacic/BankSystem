import { Component, OnInit } from '@angular/core';
import { LogInAuthenticationService } from '../api/log-in-authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    Username: '',
    Password: ''
  };
  constructor(public service: LogInAuthenticationService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
   if (localStorage.getItem('token') != null) {
    this.router.navigateByUrl('/view-client-detail');
   }
}
  onSubmit(logInform: NgForm) {
    this.service.login(logInform.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/view-client-detail');
      },
      err => {
         if (err.status == 400) {
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
         }
        else {
        this.toastr.error('Authentication failed.');
         }
      }
    );
  }
}
