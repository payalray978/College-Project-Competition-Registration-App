import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(""),
    password:  new FormControl("")
  })
// loginObj:any={
//   email:'',
//   password:''
// }
// http = inject(HttpClient)
// onLogin(){
//   this.http.post('https://api.freeprojectapi.com/api/ProjectCompetition/login', this.loginObj).subscribe((res: any) => {
//     alert('Login Success');
//   });

// }
userService = inject(UserService);
  router = inject(Router);

onLogin() {
  const loginForm = this.loginForm.value;

  this.userService.onUserLogin(loginForm).subscribe({
    next: (res: any) => {
      localStorage.setItem('studentId', res.userId);
      alert('User Found');
      this.router.navigateByUrl("/dashboard");
    },

    error: (err: any) => {
      alert('Wrong Credentials');
      console.log(err);
    }
  });
}

}
