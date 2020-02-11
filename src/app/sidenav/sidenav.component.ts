import { Component, OnInit, Input } from '@angular/core';
import {
  state,
  style,
  transition,
  animate,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: '240px',
        })
      ),
      state(
        'closed',
        style({
          width: '70px',
        })
      ),
      transition('open <=> closed', [animate('1s')]),
    ]),
    trigger('openCloseContent', [
      state(
        'open',
        style({
          marginLeft: '240px',
        })
      ),
      state(
        'closed',
        style({
          marginLeft: '70px',
        })
      ),
      transition('open <=> closed', [animate('1s')]),
    ]),
  ],
})
export class SidenavComponent implements OnInit {
  @Input() isMenuOpen: boolean;
  constructor() {}

  ngOnInit() {}
}
