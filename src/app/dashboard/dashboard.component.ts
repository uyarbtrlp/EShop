import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    items: MenuItem[];

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Product Management',
                icon: 'pi pi-pw pi-file',
                items: [
                    {
                        label: 'Products',
                        routerLink: ['/dashboard/products'],
                        icon: 'pi pi-fw pi-plus',
                        routerLinkActiveOptions: { exact: true }
                    }
                ],
            },
            {
              label: 'Category Management',
              icon: 'pi pi-pw pi-file',
              expanded: this.checkActiveState(this.router.url),
              items: [
                  {
                      label: 'Categories',
                      routerLink: ['/dashboard/categories'],
                      icon: 'pi pi-fw pi-plus',
                      routerLinkActiveOptions: { exact: true }
                  }
              ],
          }
        ];
    }

    checkActiveState(givenLink) {
      console.log(this.router.url);
      if (this.router.url.indexOf(givenLink) === -1) {
        return false;
      } else {
        return true;
      }
    }
}
