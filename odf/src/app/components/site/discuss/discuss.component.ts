import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { DiscussService } from 'src/app/service/discuss.service';
import { ForumService } from 'src/app/service/forum.service';

@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.css']
})
export class DiscussComponent implements OnInit {

  constructor(private router:Router,private discussService : DiscussService,
              private activatedRoute:ActivatedRoute,
              private forum:ForumService,
              private authService:AuthService) { }

  public discussion;
  public forumname;
  public _id;
  public User;

  ngOnInit(): void {
    if(!(localStorage.getItem('isloggedin') == "true")){
      this.router.navigate(['/login']);
    }

    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
    
    this.forum.forumname(this._id).subscribe(data => {
      this.forumname = data.forumname;
    });

    this.authService.get(localStorage.getItem('_id')).subscribe(data => {
      this.User = data;
    });

    this.discussService.get(this._id).subscribe(data => {
      this.discussion = data;   
      for(let d in this.discussion){
        if((localStorage.getItem('_id')) == this.discussion[d].email){  
          this.discussion[d].firstname = "You";
          this.discussion[d].lastname = '';
          this.discussion[d].email = '';
          console.log(this.discussion[d].email);
        }
        else{
          this.discussion[d].email = "(" + this.discussion[d].email + ")";
        }        
      }
    });
    
  }1
  sendMessege(message){
    let url = '/discuss/' + this._id;
    let msg = message.value;
    message.value = '';
    const data = {
      discussid : this._id,
      firstname : this.User.firstname,
      lastname : this.User.lastname,
      email : this.User.email,
      msg : msg
    }
    this.discussService.create(data).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/refresh',{ skipLocationChange:true }).then(()=>{
        this.router.navigate([url]);
      });
    })
  }

}
