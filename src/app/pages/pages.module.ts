import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { PagesRoutingModule } from './pages-routing.module';
import { InformationComponent } from './information/information.component';
import { ConnectionsComponent } from './connections/connections.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { InfoCardComponent } from './information/info-card/info-card.component';
import { StatusComponent } from './connections/status/status.component';
import { SpotifyConnectionComponent } from './connections/spotify-connection/spotify-connection.component';
import { StreamElementsConnectionComponent } from './connections/stream-elements-connection/stream-elements-connection.component';
import { RiotConnectionComponent } from './connections/riot-connection/riot-connection.component';
import { CommandsComponent } from './dashboard/commands/commands.component';
import { SongVolumeComponent } from './dashboard/song-volume/song-volume.component';
import { SlotsComponent } from './dashboard/slots/slots.component';

@NgModule({
  declarations: [
    InformationComponent,
    ConnectionsComponent,
    DashboardComponent,
    InfoCardComponent,
    StatusComponent,
    SpotifyConnectionComponent,
    StreamElementsConnectionComponent,
    RiotConnectionComponent,
    CommandsComponent,
    SongVolumeComponent,
    SlotsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSliderModule,
    MatIconModule,
    MatTableModule,
  ],
})
export class PagesModule {}
