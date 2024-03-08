import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-service.service';
import { Signup } from 'src/app/types';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  submitted = false;
  signinData: Signup = new Signup();

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  signinForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    this.submitted = true;
    if (this.signinForm.valid) {
      return this.apiService.loginUser(this.signinData);
    }
    return;
  }
}
