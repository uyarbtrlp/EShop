import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthResponseData, AuthService } from '../../auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  authObservable: Observable<AuthResponseData>

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService){}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'userData': new FormGroup({
        'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'passwordConfirm': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
    })
    this.registerForm.addValidators(this.validatePasswordMatch(this.registerForm.get('userData.password') as FormControl, this.registerForm.get('userData.passwordConfirm') as FormControl))
  }

  onSubmit(){
    if(!this.registerForm.valid){
      return
    }

    const email = this.registerForm.value.userData.email;
    const password = this.registerForm.value.userData.password

    this.authObservable = this.authService.register(email, password)

    this.authObservable.subscribe({
      next:(response) => {
        console.log(response)
        this.router.navigate(['/dashboard'])
      },
      error:(errorMessage)=>{
        this.messageService.add({severity:'error', summary:errorMessage});
      }
    })
  }

  validatePasswordMatch(password: FormControl, passwordConfirm:FormControl): ValidatorFn {
    return () => {
      if (password.value !== passwordConfirm.value)
        return { 'passwordMismatch': true };
      return null;
    };
  };

}
