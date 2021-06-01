import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import * as ff from 'firebase/app'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any =null

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data=>this.authState=data)
   }
  login()
  {
    this.afAuth.signInWithPopup(new ff.default.auth.GoogleAuthProvider)
  }
  logout()
  {
    this.afAuth.signOut()
  }
  get authenticated(){
    return this.authState!==null
  }
  get currentUserId()
  {
    return this.authenticated? this.authState.uid:null
  }
}
