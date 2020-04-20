import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ProfileComponent, LoginComponent],
})
export class UserModule {}
