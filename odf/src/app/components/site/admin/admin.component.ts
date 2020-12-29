import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { DiscussService } from 'src/app/service/discuss.service';
import { ForumService } from 'src/app/service/forum.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private admin : AdminService,
              private forumService : ForumService,
              private discussService : DiscussService,
              private router:Router) { }
  public data;
  ngOnInit(): void {
    this.admin.get().subscribe(data => {
      this.data = data;
    });
  }

  remove(id){
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
        this.forumService.delete(id).subscribe(data => {
          // console.log(data);
        });
        Swal.fire(
          'Deleted!',
          'The forum has been deleted.',
          'success'
        ).then(() => {
          this.router.navigateByUrl('/refresh',{ skipLocationChange:true }).then(()=>{
            this.router.navigate(['/admin']);
          });
        })
      }
    })
  }

}
