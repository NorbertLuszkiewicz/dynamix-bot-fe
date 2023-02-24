import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';
import { MessageResponse } from '../../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ConnectionsService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  connectStreamElements(clientID: string, token: string, streamerName: string): Observable<MessageResponse> {
    return this.http
      .put<MessageResponse>(`${environment.url}streamelements`, { clientID, token, user: streamerName })
      .pipe(
        tap((data) => {
          this.authService.successMessage$.next(data.message || 'Added slot');
        })
      );
  }

  addRiotAccount(name: string, server: string, streamerName: string): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(`${environment.url}riot`, { name, server, user: streamerName }).pipe(
      tap((data) => {
        this.authService.successMessage$.next(data.message || 'Added slot');
      })
    );
  }

  removeRiotAccount(name: string, server: string, streamerName: string): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(`${environment.url}riot-remove`, { name, server, user: streamerName }).pipe(
      tap((data) => {
        this.authService.successMessage$.next(data.message || 'Added slot');
      })
    );
  }

  connectSpotify(streamerName: string): void {
    window.location.href = `${environment.url}spotify?user=${streamerName}`;
  }
}
