import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PagenotfoundComponent } from './components/site/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/site/login/login.component';
import { RegistrationComponent } from './components/site/registration/registration.component';
import { HomeComponent } from './components/site/home/home.component';
import { AboutusComponent } from './components/site/aboutus/aboutus.component';
import { MyforumComponent } from './components/site/myforum/myforum.component';
import { DiscussComponent } from './components/site/discuss/discuss.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/site/admin/admin.component';
import { RefreshComponent } from './components/layout/refresh/refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    PagenotfoundComponent,
    HomeComponent,
    MyforumComponent,
    AboutusComponent,
    DiscussComponent,
    AdminComponent,
    RefreshComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
