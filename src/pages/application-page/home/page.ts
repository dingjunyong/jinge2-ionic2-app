import { Component } from '@angular/core';

import { ModalController,NavController } from 'ionic-angular';

@Component({
  templateUrl: 'template.html',
  providers: []
})
export class HomePage {

  errorMessage: string;


  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,) {
  }

  ngOnInit()
  {
  }




}




