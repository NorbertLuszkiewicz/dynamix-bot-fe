import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { commandSwitch } from 'src/app/models/user-interfaces';
import { environment } from 'src/environments/environment';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';
import { MessageResponse } from '../../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  addChangeVolumeAward(
    min: number,
    max: number,
    minSR: number,
    maxSR: number,
    time: number,
    streamerName: string
  ): Observable<MessageResponse> {
    return this.http
      .put<MessageResponse>(`${environment.url}volumeaward`, { min, max, minSR, maxSR, time, user: streamerName })
      .pipe(
        tap((data) => {
          this.authService.successMessage$.next(data.message || 'Volume award changed');
        })
      );
  }

  addSlotsAward(name: string, emotes: number, withBan: boolean, streamerName: string): Observable<MessageResponse> {
    return this.http
      .put<MessageResponse>(`${environment.url}slots`, { name, emotes, withBan, user: streamerName })
      .pipe(
        tap((data) => {
          this.authService.getNewUser();
          this.authService.successMessage$.next(data.message || 'Added slot');
        })
      );
  }

  changeCommandSwitch(body: commandSwitch, streamerName: string): Observable<MessageResponse> {
    return this.http
      .put<MessageResponse>(`${environment.url}command_switch`, { body, user: streamerName })
      .pipe(distinctUntilChanged());
  }

  removeSlot(id: string, streamerName: string): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(`${environment.url}slot_remove`, { id, user: streamerName }).pipe(
      tap((data) => {
        this.authService.getNewUser();
        this.authService.successMessage$.next(data.message || 'Removed slot');
      })
    );
  }
}
