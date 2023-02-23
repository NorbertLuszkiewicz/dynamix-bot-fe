import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  statuses = {
    twitch: true,
    spotify: false,
    streamElements: false,
    riot: false,
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.statuses = {
        twitch: true,
        spotify: !!user.spotifyAccessToken,
        streamElements: !!user.clientSongRequestID,
        riot: user.riotAccountList?.length > 0,
      };
    });
  }
}
