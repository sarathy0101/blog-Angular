import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'blog';
  constructor(private metaTagService:Meta)
  {

  }
  ngOnInit(): void {
    this.metaTagService.addTags([
      {name:'keywords',content:'carrers,jobs,vacancy, your careers , software developers, placement preparation'},
      {name:'robots',content:'index,follow'},
      {name:'author',content:'Your Careers'},
      {name:'keywords',content:'qq,rr'},
      {name:'date',content:'2021-06-01',scheme:'YYYY-MM-DD'},
      {property:'og:title',content:"Your Careers"},
      {property:'og:url',content:"https://yourcareers.xyz"},
      {property:'og:description',content:"YourCareers will help job seekers,freshers, Experienced Candidates by giving you the best jobs available for you.In this blog , we post jobs details and required skills for the job.We help our people to get into their career easily. We have interview process of every company you looking for."},
      {property:'og:image',content:"https://firebasestorage.googleapis.com/v0/b/blog-3693f.appspot.com/o/blog%2Fyourcareers.jpg?alt=media&token=ef4d815a-6f26-4458-a3fc-311d83c759c6"},
    ])
   
   
  }
}