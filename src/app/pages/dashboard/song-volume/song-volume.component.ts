import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-song-volume',
  templateUrl: './song-volume.component.html',
  styleUrls: ['./song-volume.component.scss'],
})
export class SongVolumeComponent {
  data: any = {
    min: 50,
    minSR: 50,
    max: 100,
    maxSR: 100,
    time: 60,
  };

  constructor(private authService: AuthService, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => !!user.volumeSongID && (this.data = user.volumeSongID));
    console.log(this.data);
  }

  onSubmit(): void {
    const name = localStorage.getItem('name');
    this.dashboardService
      .addChangeVolumeAward(this.data.min, this.data.max, this.data.minSR, this.data.maxSR, this.data.time, name)
      .subscribe();
  }
}
