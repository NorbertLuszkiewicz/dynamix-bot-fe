import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  displayError: boolean = false;

  errorMessage$ = this.authService.errorMessage$;
  successMessage$ = this.authService.successMessage$;

  ngOnInit(): void {
    this.authService.getNewUser();

    this.errorMessage$.subscribe((x) => {
      this.displayError = !!x;
    });
  }
}
