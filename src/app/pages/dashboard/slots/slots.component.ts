import { Component, OnInit } from '@angular/core';
import { Slot } from '../../../models/interfaces';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'withBan', 'emotes', 'times', 'wins', 'id', 'last-winners', 'delete'];
  slotsData = {
    name: '',
    emotes: 7,
    isTimeOut: false,
  };
  winningPercentage: string;
  slots: Slot[] = [];

  constructor(private authService: AuthService, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.calcWinningPercentage();
    this.authService.user$.subscribe((user) => (this.slots = user.slotsID));
  }

  calcWinningPercentage(): void {
    this.winningPercentage = ((1 / (this.slotsData.emotes * this.slotsData.emotes)) * 100).toFixed(2);
  }

  deleteSlot(slot): void {
    const name = localStorage.getItem('name');
    this.dashboardService.removeSlot(slot.name, name).subscribe();
  }

  createSlotsAward(): void {
    const name = localStorage.getItem('name');
    this.dashboardService
      .addSlotsAward(this.slotsData.name, this.slotsData.emotes, this.slotsData.isTimeOut, name)
      .subscribe();
  }
}
