import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {InterviewprocessService  } from '../interviewprocess.service';
@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.css']
})
export class ProcessDetailComponent implements OnInit {
  posts?:any
  constructor(private route:ActivatedRoute,private interviewprocessService:InterviewprocessService,private router:Router) { }
 
  ngOnInit(): void {
    this.getPost()
  }

  getPost()
  {
    const id=this.route.snapshot.params.id
    console.log(id)
    
    return this.interviewprocessService.getPostData(id).subscribe(data=>{
      this.posts=data
      console.log(data)
     })
  }
}

