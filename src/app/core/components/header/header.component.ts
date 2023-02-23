import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isOpenMenu: boolean = false;
  loginUrl = environment.loginRedirect;

  isLoggedIn$ = this.authService.user$.pipe(map((x) => !!x));

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    tap((result) => {
      if (result) this.isOpenMenu = false;
    }),
    shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
  ) {}

  changeMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  login() {
    window.location.href = environment.loginRedirect;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/information']);
  }
}
