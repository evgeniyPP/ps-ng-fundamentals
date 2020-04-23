import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';
import { TOASTR_TOKEN, IToastr } from './../../common/toastr.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mouseoverLogin = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr
  ) {}

  ngOnInit() {}

  login({ userName, password }) {
    this.authService.loginUser(userName, password).subscribe((res) => {
      if (!res) {
        this.toastr.error('Invalid login or password');
        return;
      }

      this.router.navigate(['/events']);
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
