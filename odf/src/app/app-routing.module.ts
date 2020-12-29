import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/site/aboutus/aboutus.component';
import { HomeComponent } from './components/site/home/home.component';
import { LoginComponent } from './components/site/login/login.component';
import { PagenotfoundComponent } from './components/site/pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './components/site/registration/registration.component';
import { MyforumComponent } from './components/site/myforum/myforum.component';
import { DiscussComponent } from './components/site/discuss/discuss.component';
import { AdminComponent } from './components/site/admin/admin.component';
import { RefreshComponent } from './components/layout/refresh/refresh.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"index",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"myforum", component:MyforumComponent},
  {path:'admin',component:AdminComponent},
  {path:'refresh',component:RefreshComponent},
  {path:"discuss/:_id", component:DiscussComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
