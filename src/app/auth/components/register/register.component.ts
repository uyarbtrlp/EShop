import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'userData': new FormGroup({
        'password': new FormControl(null, [Validators.required]),
        'passwordConfirm': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
    })
    console.log(this.registerForm)
    this.registerForm.addValidators(this.validatePasswordMatch(this.registerForm.get('userData.password') as FormControl, this.registerForm.get('userData.passwordConfirm') as FormControl))
  }

  validatePasswordMatch(password: FormControl, passwordConfirm:FormControl): ValidatorFn {
    return () => {
      if (password.value !== passwordConfirm.value)
        return { 'passwordMismatch': true };
      return null;
    };
  };

}
