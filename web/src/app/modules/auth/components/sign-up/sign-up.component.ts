import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../service/auth.service';
interface Params {
  email: string;
  password: string;
  name: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  formCreateUser = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private dialogRef: MatDialogRef<SignUpComponent>,
    private formBuilder: FormBuilder,
    private service: AuthService
  ) {
    dialogRef.disableClose = true;
  }
  onSubmit() {
    this.service
      .create(this.formCreateUser.value as Params, '/users')
      .subscribe({
        next: (params) => this.onLogin(params),
        error: (x) => console.log(x),
      });
  }

  onLogin(params: any) {
    console.log(params);
    const password = this.formCreateUser.get('password')?.value;
    const { email } = params;
    const login = { email, password };
    this.service.login(login as Params, '/users/auth').subscribe({
      next: (token) => this.onLoginPerformed(token),
      error: (x) => console.log(x),
    });
  }
  onLoginPerformed(token: any) {
    window.localStorage.setItem('token', token.token);
  }
}
