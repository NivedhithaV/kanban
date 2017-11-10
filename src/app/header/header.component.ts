import {Component} from '@angular/core';
import {AppConstants} from '../app.common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constants: AppConstants;

  constructor(constants: AppConstants) {
    this.constants = constants;
  }

}
