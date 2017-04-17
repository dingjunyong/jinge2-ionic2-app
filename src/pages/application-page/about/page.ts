
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'template.html'
})
export class AboutPage {

  searchKeyword:string;
  errorMessage: string;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit()
  {

  }

}
