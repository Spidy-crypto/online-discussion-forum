import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registerForm: FormGroup;

  get fname(){
    return this.registerForm.get('firstname');
  }
  get lname(){
    return this.registerForm.get('lastname');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get pass(){
    return this.registerForm.get('password');
  }
  get repass(){
    return this.registerForm.get('repassword');
  }

  constructor(private formBuilder: FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      password:[''],
      repassword:['']
    });
  }

  
  register(e) : void{
    e.preventDefault();
    let pass = this.registerForm.controls.password.value;
    let repass = this.registerForm.controls.repassword.value;
    if(pass != repass){
        this.registerForm.patchValue({
          password:'',
          repassword:''
        });
        Swal.fire("Try again!", "Password and Confirm-password should be same", "error");
        return;
    }
    else{
      const user = {
        firstname: this.registerForm.controls.firstname.value,
        lastname: this.registerForm.controls.lastname.value,
        email:this.registerForm.controls.email.value,
        password: this.registerForm.controls.password.value
      }

      //Email Start
      let email = user.email;
      let otp = String(Math.floor(Math.random() * 1000) + 1000);
      this.authService.sendmail({email,otp}).subscribe(data => {
      })

      //Email End

      this.authService.get(user.email).subscribe(data => {
        if(data){
          this.registerForm.patchValue({
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            repassword:''
          });
          Swal.fire("Sorry", "You have already registered", "error");
          return;
        }
      });
      Swal.fire({
        title: 'Enter Your Otp ',
        input: 'text',
        confirmButtonText: 'Confirm',
      }).then((result) => {
        if(result.value == otp){
          if (this.registerForm.invalid) {
            console.log('invalid');
            return;
          }
          else{
            this.authService.create(user).subscribe(data => {
              console.log(data);
              Swal.fire("Good Job", "You have successfully registered", "success").then(() => {
                this.router.navigate(['/login']);                
              });
            })
          }
        }
        else{
          this.registerForm.patchValue({
            password:'',
            repassword:''
          });
          Swal.fire("", "Enter Correct Otp", "error");
        }
      })
     }
  }
}