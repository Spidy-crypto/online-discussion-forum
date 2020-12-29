import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isloggedin : any;
  
  constructor(private authService:AuthService,
              private router:Router) { }
  
  ngOnInit(): void {
    console.log("Hello");
    this.authService.isloggedin.subscribe(isloggedin => {
      this.isloggedin = !isloggedin;
    })
    
  }
}
