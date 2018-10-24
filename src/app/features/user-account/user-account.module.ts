import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserSecurityComponent } from './user-security/user-security.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserLoginComponent, LoginLogoutComponent, UserAvatarComponent, AvatarComponent, UserSecurityComponent, LoginComponent]
})
export class UserAccountModule { }
