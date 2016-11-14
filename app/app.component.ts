import { Component } from '@angular/core';
//import { CORE_DIRECTIVES } from '@angular/core';
import { Dropdown } from './dropdown/dropdown.directive';
import { DropdownMenu } from './dropdown/dropdown-menu.directive';
import { DropdownToggle } from './dropdown/dropdown-toggle.directive'

@Component({
  selector: 'trillary',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})

export class AppComponent {
  title = 'Trillary';
  private status:{isOpen:boolean} = {isOpen:false};
  private dropdownMenu($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isOpen = !this.status.isOpen;
  };
}
