import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  searchData: string | undefined;

  constructor(private router: Router, public fb: FormBuilder) {}

  searchForm = this.fb.group({
    title: ['', [Validators.required]],
  });

  clickHandle() {
    this.router.navigate(['create-todo']);
  }

  onSubmit() {
    if (this.searchForm.valid) {
      return true;
    } else {
      return false;
    }
  }
}
