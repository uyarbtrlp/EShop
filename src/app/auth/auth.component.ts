import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {label: 'Login', routerLink: ["/auth/login"]},
          {label: 'Register', routerLink: ["/auth/register"]},
      ];
  }
}
