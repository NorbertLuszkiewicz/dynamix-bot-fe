import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent implements OnInit {
  @Input() title: string;
  @Input() small: boolean;
  @Input() center: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log(this.center);
  }
}
