import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

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
  userFromDB: any;
  scrollPercentage: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    this.scrollPercentage = (scrollOffset / windowHeight) * 100;
  }

  constructor(private router: Router, private AuthService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routes = this.router.config.map(conf => conf.path) as string[];

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;

      if(this.routes.includes(currentPage)) {
        this.page = currentPage;
      }
    });
    this.AuthService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser= user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
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
