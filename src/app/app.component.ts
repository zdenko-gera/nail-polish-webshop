import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  page = '';
  routes: Array<string> = [];
  loggedInUser?: firebase.default.User | null;
  cntOfItemsInCart: number = 0;

  constructor(private router: Router, private AuthService: AuthService) {  }

  ngOnInit(): void {
    this.routes = this.router.config.map(conf => conf.path) as string[];

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;

      if(this.routes.includes(currentPage)) {
        this.page = currentPage;
      }
    });
  }

  changePage(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  closeSidenav(event: any, sidenav: MatSidenav) {
    if(event === true) {
      sidenav.close();
    }
  }

  logout(_?: boolean) {
    this.AuthService.logout().then(() => {
      console.log('Sikeresen kijelentkeztél.');
    }).catch(error => {
      console.error(error);
    });
  }
}
