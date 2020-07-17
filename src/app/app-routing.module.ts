import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PostDetailPageComponent } from './pages/post-detail-page/post-detail-page.component';
import { ProfileEditPageComponent } from './pages/profile-edit-page/profile-edit-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'user/:id', component: ProfilePageComponent },
  { path: 'posts/:id', component: PostDetailPageComponent },
  { path: 'user/:id/edit', component: ProfileEditPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
