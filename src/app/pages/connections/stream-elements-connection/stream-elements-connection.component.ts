import { Component, OnInit } from '@angular/core';
import { StreamElementsForm } from 'src/app/models/interfaces';
import { ConnectionsService } from '../../services/connections.service';

@Component({
  selector: 'app-stream-elements-connection',
  templateUrl: './stream-elements-connection.component.html',
  styleUrls: ['./stream-elements-connection.component.scss'],
})
export class StreamElementsConnectionComponent implements OnInit {
  constructor(private connectionsService: ConnectionsService) {}

  streamElementsData: StreamElementsForm = {
    accountId: null,
    jwtToken: '',
  };

  createStreamElements(): void {
    const name = localStorage.getItem('name');
    this.connectionsService
      .connectStreamElements(this.streamElementsData.accountId, this.streamElementsData.jwtToken, name)
      .subscribe();
  }

  ngOnInit(): void {}
}
