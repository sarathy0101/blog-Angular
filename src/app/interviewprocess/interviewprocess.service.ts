import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})

export class InterviewprocessService {
  constructor(private afs:AngularFirestore) { 
    
    
  }
    getPosts(){
     return this.afs.collection('interviewProcess',ref=>
      ref.orderBy('published','desc')
      ).snapshotChanges()
      
    }
    getPostData(id:string)
    {
      return this.afs.doc(`interviewProcess/${id}`).valueChanges()
    }
    create(data:any)
    {
      this.afs.collection('blog').add(data)
    }
    delete(id: string)
    {
      this.afs.collection('blog').doc(id).delete()
      console.log(id)
      console.log("deleted")
    }
    update(id:string,formData: any)
    {
      this.afs.collection('blog').doc(id).update(formData)
    }
}

