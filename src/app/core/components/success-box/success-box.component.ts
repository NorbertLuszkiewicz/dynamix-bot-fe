import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-success-box',
  templateUrl: './success-box.component.html',
  styleUrls: ['./success-box.component.scss'],
})
export class SuccessBoxComponent implements OnInit {
  message$ = this.authService.successMessage$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.message$.subscribe((message) => {
      console.log(message);
    });
    setTimeout(() => this.authService.successMessage$.next(null), 5000);
  }
}
