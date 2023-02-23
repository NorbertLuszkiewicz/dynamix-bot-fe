import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.scss'],
})
export class ErrorBoxComponent implements OnInit {
  message$ = this.authService.errorMessage$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    setTimeout(() => this.authService.errorMessage$.next(null), 5000);
  }
}
