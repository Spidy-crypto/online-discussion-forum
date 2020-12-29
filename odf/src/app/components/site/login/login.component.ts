import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  
  constructor(private fb:FormBuilder,private authService:AuthService,private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:[''],
      password:['']
    });
    localStorage.setItem('isloggedin',"false");
    localStorage.setItem('_id',null);
    this.authService.isloggedin.next(false);
  }

  login(e){
    
    e.preventDefault();
    let email = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;

    this.authService.login({email,password}).subscribe(data => {
      if(data){
        localStorage.setItem('isloggedin',"true");
        localStorage.setItem('_id',data.email);
        this.authService.isloggedin.next(true);
        this.router.navigate(['/myforum']);
      }
      else{
        this.loginForm.patchValue({
          username:'',
          password:''
        })
        Swal.fire("Try again!", "Invalid Username or Password", "warning");
      }
    })
  }
}
