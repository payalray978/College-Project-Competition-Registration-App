import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerObj: any = {
    fullName: '',
    email: '',
    password: '',
    collegeName: '',
    role: 'Student',
  };
  http = inject(HttpClient);
  onRegister() {
    this.http
      .post('https://api.freeprojectapi.com/api/ProjectCompetition/register', this.registerObj)
      .subscribe((res: any) => {
        alert('Student Registration Success');
      });
  }
}
