import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  constructor(private authService: AuthService) {}

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      //Backend returns unsuccessful response codes such as 404, 500 etc.
      const errorMessage = error.message.includes('Http failure response for https://dynamix-bot.glitch.me')
        ? 'Something went wrong. Please try again later.'
        : error.message;

      this.authService.errorMessage$.next(errorMessage);
    }
  }
}
