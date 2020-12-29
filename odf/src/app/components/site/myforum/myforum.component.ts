import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ForumService } from 'src/app/service/forum.service';
import { AdminService } from 'src/app/service/admin.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-myforum',
  templateUrl: './myforum.component.html',
  styleUrls: ['./myforum.component.css']
})
export class MyforumComponent implements OnInit {

  constructor(private forumService:ForumService,
              private router:Router,
              private admin:AdminService) { }
  public forums;
  ngOnInit(): void {
    
    $(document).ready(function(){
      $("#wrap_name").hide();
      $(".Show_name").click(function(){
        $("#wrap_name").toggle();
        $("#wrap_id").hide();
      });
      $("#wrap_id").hide();
      $(".Show_Id").click(function(){
        $("#wrap_id").toggle();
        $("#wrap_name").hide();
      })
    });

    if(!(localStorage.getItem('isloggedin') == "true")){
      this.router.navigate(['/login']);
    }

     this.forumService.get(localStorage.getItem("_id")).subscribe(data => {
       this.forums = data;
     })
  }

  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  create(name){
    // window.location.reload();
    let forumname = name.value;
    let email = localStorage.getItem('_id');
    let forumid = this.makeid(10);
    this.forumService.create({forumname,email,forumid}).subscribe(data => {
      console.log(data);
    })
    this.admin.post({forumname,email,forumid}).subscribe(data => {
      console.log(data);
    });
    name.value = '';
    this.router.navigateByUrl('/refresh',{ skipLocationChange:true }).then(()=>{
      this.router.navigate(['/myforum']);
    });
  } 

  join(joinId){
    let forumid = joinId.value;
    this.forumService.forumname(joinId.value).subscribe(data => {
      if(!data){
        Swal.fire("", "This forum is not Available", "error");
      }else{
        let forumname = data.forumname;
        let email = localStorage.getItem('_id');
        console.log(forumname,email,forumid);
        this.forumService.already({email,forumid}).subscribe(data => {
          if(data[0]){
            Swal.fire("","You are already joined this Forum","warning");
          }
          else{
            this.forumService.create({forumname,email,forumid}).subscribe(data => {
              Swal.fire("Great", "You have successfully Join", "success").then(() => {
                this.router.navigateByUrl('/refresh',{ skipLocationChange:true }).then(()=>{
                  this.router.navigate(['/myforum']);
                });
              });
            })  
          }
        })
      }
      joinId.value = '';
    })
  }

  leave(id){
    let email = localStorage.getItem("_id");
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this forum!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        this.forumService.deletefromForum({email,id}).subscribe(data => {
        });
        Swal.fire(
          'Deleted!',
          'The forum has been deleted.',
          'success'
        ).then(() => {
          this.router.navigateByUrl('/refresh',{ skipLocationChange:true }).then(()=>{
            this.router.navigate(['/myforum']);
          });
        })
      }
    })
  }


}
