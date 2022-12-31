import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  loginWithEmail(data:any){
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  logout(){
    return this.auth.signOut();
  }

  signup(data:any){
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveDetails(data:any){
    return this.firestore.collection("users").doc(data.uid).set(data)
  }

  getDetails(data:any){
    return this.firestore.collection("users").doc(data.uid).valueChanges();
  }
}
