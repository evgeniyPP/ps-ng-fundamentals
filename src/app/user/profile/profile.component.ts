import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.authService.currentUser.firstName, [
        Validators.required,
        Validators.pattern('[a-zA-Z]+'),
      ]),
      lastName: new FormControl(this.authService.currentUser.lastName, [
        Validators.required,
        Validators.pattern('[a-zA-Z]+'),
      ]),
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveProfile({ firstName, lastName }) {
    if (!this.profileForm.valid) {
      return;
    }

    this.authService.updateCurrentUser(firstName, lastName);
    this.router.navigate(['/events']);
  }

  validateFirstName() {
    return (
      this.profileForm.controls.firstName.valid ||
      this.profileForm.controls.firstName.untouched
    );
  }

  validateLastName() {
    return (
      this.profileForm.controls.lastName.valid ||
      this.profileForm.controls.lastName.untouched
    );
  }
}
