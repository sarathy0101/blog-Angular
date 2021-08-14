import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { PostsService } from '../posts.service';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Meta, Title } from '@angular/platform-browser';
import { formatDate } from '@angular/common';
import { CanonicalService } from 'src/app/canonical.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  posts?:any
  commentForm:FormGroup;
  editMode:boolean=false;
  date:any;
  viewCounted=false;
  isLiked=false;
  statusComment="Post Comment";
  constructor( private route:ActivatedRoute,private router:Router,private postservice:PostsService,public auth:AuthService,private title:Title,private metaTagService:Meta,private canonicalService:CanonicalService) {

    this.commentForm = new FormGroup({
      name: new FormControl(""  ,[Validators.required]),
      comment: new FormControl("",[Validators.required])
    }); 
  }

  ngOnInit(): void {
    this.getPost()
    this.canonicalService.setCanonicalURL()
    
  }
  isValid()
  {
    if(this.commentForm?.value.name.length>0 && this.commentForm?.value.comment.length>0)
    {
      return true;
    }
    
    return false
    
  }
  checkError(label:string)
  {
    if(label==='name')
    {
      
      if(this.commentForm?.value.name.length>0)
      {
        return false;
      }
      else 
      {
        return true
      }
    }
    else if(label=='comment')
    {
      if( this.commentForm?.value.comment.length>0)
      {
        return false;
      }
    }
    return true;
  }
  getPost()
  {
    const id=this.route.snapshot.params.id
    console.log(id)
    
    return this.postservice.getPostData(id).subscribe(data=>{
      this.posts=data
      this.title.setTitle(this.posts.title)
      this.metaTagService.updateTag(
      {name:'keywords',content:this.posts.keywords})
      this.date=formatDate(this.posts.published.toDate(), 'yyyy-MM-dd', 'en-US')
      const id=this.route.snapshot.params.id
      this.metaTagService.updateTag({property:'og:url',content:'https://yourcareers.xyz/blog/'+id})
      this.metaTagService.updateTag(
        {name:'date',content:this.date,scheme:'YYYY-MM-DD'})
        this.metaTagService.updateTag({property:'og:title',content:this.posts.title})
        this.metaTagService.updateTag({property:'og:description',content:"YourCareers will help job seekers,freshers, Experienced Candidates by giving you the best jobs available for you.In this blog , we post jobs details and required skills for the job.We help our people to get into their career easily. We have interview process of every company you looking for."})
        this.metaTagService.updateTag({property:'og:image',content:this.posts.image})
      if(!this.viewCounted)
      {
       this.UpdateView()
       this.viewCounted=true
       if(localStorage.getItem(id)==null)
       {
          localStorage.setItem(id,'0')
       }
       else if(localStorage.getItem(id)=='1'){
          this.isLiked=true
       }
    }})
  }
  updatePost()
  {
    this.editMode=true
    this.commentForm = new FormGroup({
      title: new FormControl(this.posts.title,[Validators.required, Validators.minLength(10)]),
      content: new FormControl(this.posts.content,[Validators.required, Validators.minLength(10)])
    });
    const id=this.route.snapshot.params.id
    this.postservice.update(id,{title:this.commentForm.value.title,content:this.commentForm.value.content})
  }
  UpdateView()
  {
    const id=this.route.snapshot.params.id
    this.postservice.update(id,{views:Number(this.posts.views)+1})
  }
  updateLikes()
  {
    const id=this.route.snapshot.params.id
    this.postservice.update(id,{likes:Number(this.posts.likes)+1})
    localStorage.setItem(id,'1')
  }
  delete()
  {
    const id=this.route.snapshot.params.id
    this.postservice.delete(id)
    this.router.navigate(['/blog'])
  }
  addComment()
  {
    const id=this.route.snapshot.params.id
    const commentsNew=[];
    commentsNew.push({name:this.commentForm.value.name,comment:this.commentForm.value.comment,time:new Date()});
    for(var i=0;i<this.posts.comments.length;i++)
    {
      commentsNew.push(this.posts.comments[i])
    }
    this.postservice.update(id,{comments:commentsNew})
    this.statusComment="Comment Added!(wait 5secs)"
    setTimeout(() => {
      this.statusComment="Post Comment"
    }, 200);
    
    setTimeout(() => {
      this.commentForm.reset()
    }, 300);

  }
  share()
  {
    const id=this.route.snapshot.params.id
    console.log(this.route)
    window.open('whatsapp://send?text='+this.posts.title+' '+'https://yourcareers.xyz/blog/'+id);  
  }
}
