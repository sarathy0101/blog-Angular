import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Posts} from '../posts.model';
import { map } from 'rxjs/operators';
import {PostsService} from '../posts.service'
import {PageEvent} from '@angular/material/paginator'; 

import { AuthService } from 'src/app/core/auth.service';
import { CanonicalService } from 'src/app/canonical.service';
import { Meta, Title } from '@angular/platform-browser';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts?:Posts[];
  totalLists?:number;
  lowValue: number = 0;
  highValue: number = 12;
  constructor(private postservice:PostsService, public auth:AuthService ,private canonicalService:CanonicalService,private title:Title,private metaTagService:Meta) { }
  
  ngOnInit(): void {
    this.canonicalService.setCanonicalURL()
    this.postservice.getPosts().subscribe(res => {
      this.totalLists=res.length
      this.posts = res.map( e => {
        return {
          id: e.payload.doc.id,
          data:e.payload.doc.data()
        } as Posts ;
      })
      this.title.setTitle("Your Careers")
      this.metaTagService.updateTag(
      {name:'keywords',content:'carrers,jobs,vacancy, your careers , software developers, placement preparation'})
        this.metaTagService.updateTag({property:'og:title',content:'Your Careers'})
        this.metaTagService.updateTag({property:'og:url',content:'https://yourcareers.xyz'})
        this.metaTagService.updateTag({property:'og:description',content:"YourCareers will help job seekers,freshers, Experienced Candidates by giving you the best jobs available for you.In this blog , we post jobs details and required skills for the job.We help our people to get into their career easily. We have interview process of every company you looking for."})
        this.metaTagService.updateTag({property:'og:image',content:"https://firebasestorage.googleapis.com/v0/b/blog-3693f.appspot.com/o/blog%2Fyourcareers.jpg?alt=media&token=ef4d815a-6f26-4458-a3fc-311d83c759c6"})
    });  
  }
  delete(id:any)
  {
    this.postservice.delete(id)
  }
  getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}
