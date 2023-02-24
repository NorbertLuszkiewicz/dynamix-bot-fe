import { Component, OnInit } from '@angular/core';
import { ServerName } from 'src/app/models/enums';
import { RiotAccount } from 'src/app/models/interfaces';
import { ConnectionsService } from '../../services/connections.service';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-riot-connection',
  templateUrl: './riot-connection.component.html',
  styleUrls: ['./riot-connection.component.scss'],
})
export class RiotConnectionComponent implements OnInit {
  servers: ServerName[] = Object.values(ServerName);
  riotAccounts: RiotAccount[] = [];

  constructor(private connectionsService: ConnectionsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user.riotAccountList) this.riotAccounts = user.riotAccountList;
    });
  }

  riotAccountData: RiotAccount = {
    name: '',
    server: ServerName.EUW,
  };

  createRiotAccount(): void {
    const name = localStorage.getItem('name');

    this.connectionsService.addRiotAccount(this.riotAccountData.name, this.riotAccountData.server, name).subscribe();
  }

  deleteRiotAccount(account: RiotAccount): void {
    const name = localStorage.getItem('name');

    this.connectionsService.removeRiotAccount(account.name, account.server, name).subscribe();
  }

  userServerName(name): string {
    const server = {
      [ServerName.EUW]: 'EUW',
      [ServerName.EUNE]: 'EUNE',
      [ServerName.NA]: 'NA',
      [ServerName.KR]: 'KR',
    };

    console.log(name, server);

    return server[name];
  }
}
