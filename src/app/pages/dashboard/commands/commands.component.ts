import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { commandSwitch } from '../../../models/user-interfaces';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
})
export class CommandsComponent implements OnInit {
  commands: commandSwitch = {
    weather: false,
    tft: false,
    chess: false,
    wordle: false,
    slots: false,
    song: false,
  };
  streamerName: string;

  constructor(private authService: AuthService, private dashboardService: DashboardService) {}

  initCommands(): void {
    this.authService.user$.subscribe((user) => {
      if (user?.commandSwitch) {
        this.commands = user.commandSwitch;
        this.streamerName = user.streamer;
      }
    });
  }

  changeCommand(): void {
    setTimeout(() => {
      this.dashboardService.changeCommandSwitch(this.commands, this.streamerName).subscribe();
    });
  }

  ngOnInit(): void {
    this.initCommands();
  }
}
