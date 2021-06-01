import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { PostsService } from '../posts.service';
import {Posts} from '../posts.model'
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  posts?:any
  constructor( private route:ActivatedRoute,private postservice:PostsService) { 
  }

  ngOnInit(): void {
    console.log(this.getPost())
  }
  getPost()
  {
    const id=this.route.snapshot.params.id
    console.log(id)
    return this.postservice.getPostData(id).subscribe(data=>this.posts=data)
  }

}
