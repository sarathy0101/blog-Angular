import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostsService } from '../posts.service';
import {AngularFireStorage} from '@angular/fire/storage'
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {

  merchantForm:FormGroup;
  statusOfPost:string ="";
  uploadImagePercent?:Observable<any>;
  downloadUrl?:Observable<any>;
  image:string='';
  constructor(private auth:AuthService,private postService:PostsService,private storage:AngularFireStorage) {

    this.merchantForm = new FormGroup({
      title: new FormControl("",[Validators.required, Validators.minLength(10)]),
      content: new FormControl("",[Validators.required, Validators.minLength(10)])
    });
   }
  
  ngOnInit(): void {
  }
  isValid()
  {
    if(this.merchantForm?.value.title.length>10 && this.merchantForm.value.content.length>10)
    {
      return true;
    }
    
    return false
    
  }
  displayStatus()
  {
    if(this.statusOfPost==='')
    {
      return false;
    }
    else{
      return true;
    }
  }
  checkError(label:string)
  {
    if(label==='Title')
    {
      
      if(this.merchantForm?.value.title.length>10)
      {
        return false;
      }
      else 
      {
        return true
      }
    }
    else if(label=='Content')
    {
      if( this.merchantForm.value.content.length>10)
      {
        return false;
      }
    }
    return true;
  }
  uploadImage(event:any)
  {
    const file=event.target.files[0]
    var n = Date.now();
    const path=`blog/${this.auth.authState.email}/${n}`
    const storageRef = this.storage.ref(path);
    if(file.type.split('/')[0] !== 'image')
    {
      return alert('Allows only Images')
    }
    else{
      const task=this.storage.upload(path,file)
    //   task.snapshotChanges().pipe(
    //     finalize(() => this.downloadUrl = storageRef.getDownloadURL() )
    //  )
    // .subscribe();
    this.uploadImagePercent=task.percentageChanges()
    //
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadUrl = storageRef.getDownloadURL();
          this.downloadUrl.subscribe(url => {
            if (url) {
              this.image = url;
            }
            console.log(this.image);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      }); 
  }
    console.log(this.downloadUrl)
    console.log("image uploaded")
  }
  
  createPost()
  {
    
    const data={
      author:this.auth.authState.displayName|| this.auth.authState.email ,
      authorId:this.auth.currentUserId,
      content:this.merchantForm?.value.content,
      image:this.downloadUrl,
      published:new Date(),
      title:this.merchantForm?.value.title
    }
    this.postService.create(data)
    this.statusOfPost="Post Succesfully Created!!"
    setTimeout(() => {
      this.statusOfPost=""
    }, 3000);

  }
  }

