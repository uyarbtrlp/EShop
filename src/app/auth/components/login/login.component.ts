import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [MessageService]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    authObservable: Observable<AuthResponseData>;

    constructor(private authService: AuthService, private router: Router, private messageService: MessageService){}

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            userData: new FormGroup({
                password: new FormControl(null, [Validators.required]),
                email: new FormControl(null, [
                    Validators.required,
                    Validators.email,
                ]),
            }),
        });
    }

    onSubmit() {
        if (!this.loginForm.valid) {
            return;
        }

        const email = this.loginForm.value.userData.email;
        const password = this.loginForm.value.userData.password;

        this.authObservable = this.authService.login(email, password);

        this.authObservable.subscribe({
            next: (response) => {
                console.log(response);
                this.router.navigate(['/dashboard']);
            },
            error: (errorMessage) => {
                this.messageService.add({severity:'error', summary:errorMessage});
            },
        });
    }
}
