import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-circle',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/circle.svg'
})
export class IconCircleComponent {}

@NgModule({
  declarations: [ IconCircleComponent ],
  exports: [ IconCircleComponent ]
})
export class IconCircle {}
