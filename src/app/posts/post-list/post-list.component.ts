import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Posts} from '../posts.model';
import { map } from 'rxjs/operators';
import {PostsService} from '../posts.service'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts?:Posts[];
  constructor(private postservice:PostsService) { }

  ngOnInit(): void {
    this.postservice.getPosts().subscribe(res => {
      this.posts = res.map( e => {
        return {
          id: e.payload.doc.id,
          data:e.payload.doc.data()
        } as Posts ;
      })
      console.log(this.posts)
    });  
  }

}
