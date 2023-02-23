import { Component, Input } from '@angular/core';
import { CommendList } from 'src/app/models/interfaces';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Input() commendList: CommendList;

  identify(i): number {
    console.log(this.commendList);
    return i;
  }
}
