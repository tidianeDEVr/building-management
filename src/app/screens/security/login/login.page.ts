import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = ''
  public password: string = ''
  
  constructor(private security: SecurityService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.security.loginWithEmail({email: this.email, password: this.password})
    .then(res => {
      this.router.navigate(['/home'])
    }).catch(err => {
      alert('Error')
    })
  }
}
