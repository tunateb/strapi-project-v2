import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PostDetailPageComponent } from './pages/post-detail-page/post-detail-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'posts/:id', component: PostDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
