import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import {Posts} from './posts.model';
@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(private afs:AngularFirestore) { 
    
    
  }
    getPosts(){
     return this.afs.collection('blog',ref=>
      ref.orderBy('published','desc')
      ).snapshotChanges()
      
    }
    getPostData(id:string)
    {
      return this.afs.doc<Posts>(`blog/${id}`).valueChanges()
    }
    create(data:any)
    {
      this.afs.collection('blog').add(data)
    }
    delete(id: string)
    {
      this.afs.collection('blog').doc(id).delete()
    }
    update(id:string,formData: any)
    {
      this.afs.collection('blog').doc(id).update(formData)
    }
}

