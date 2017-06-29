import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-list',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/list.svg'
})
export class IconListComponent {}

@NgModule({
  declarations: [ IconListComponent ],
  exports: [ IconListComponent ]
})
export class IconList {}