import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { FormBuilder, Validators } from '@angular/forms';
interface Params {
  email: string,
  password: string

}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  login = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],

  });

  ngOnInit() {

    this.router.navigate(['/dashboard'])
  
  }

  hide: Boolean = true;
  constructor(
    private service: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit() {
    console.log(this.login.value)
    if (this.login.valid) {
      this.service.login(this.login.value as Params, '/users/auth').subscribe({
        next: (token) => this.onLoginPerformed(token),
        error: (x) => console.log(x)
      })
    }
  }

  onLoginPerformed(token: any) {
    window.localStorage.setItem('token', token.token);
  }

  dialogSignUp() {
    this.dialog.open(SignUpComponent, {
      minWidth: '400px',
      disableClose: true
    })

  }
}
