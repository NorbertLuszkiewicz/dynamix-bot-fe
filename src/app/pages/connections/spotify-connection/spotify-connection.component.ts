import { Component } from '@angular/core';
import { ConnectionsService } from '../../services/connections.service';

@Component({
  selector: 'app-spotify-connection',
  templateUrl: './spotify-connection.component.html',
  styleUrls: ['./spotify-connection.component.scss'],
})
export class SpotifyConnectionComponent {
  constructor(private connectionsService: ConnectionsService) {}

  connectSpotify(): void {
    const name = localStorage.getItem('name');
    if (name) this.connectionsService.connectSpotify(name);
  }
}
