import { Component } from '@angular/core';

/**
 * Generated class for the AngComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ang',
  templateUrl: 'ang.html'
})
export class AngComponent {

  text: string;

  constructor() {
    console.log('Hello AngComponent Component');
    this.text = 'Hello World';
  }

}
