import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig,private authService:AuthService,) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.authService.autoLogin()
    }
}
