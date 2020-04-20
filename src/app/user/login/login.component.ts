import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mouseoverLogin = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login({ userName, password }) {
    this.authService.loginUser(userName, password);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
