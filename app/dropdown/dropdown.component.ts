// import { Component } from '@angular/core';
// // import { CORE_DIRECTIVES } from '@angular/common';
// import {Dropdown} from './dropdown.directive';
// import {DropdownMenu} from './dropdown-menu.directive';
// import {DropdownToggle} from './dropdown-toggle.directive';
//
// @Component({
//     selector: 'my-app',
//     templateUrl: './dropdown.component.html',
//     directives: [ Dropdown, DropdownMenu, DropdownToggle, CORE_DIRECTIVES],
//  })
// export class DropdownComponent {
//
//     private disabledMenu:boolean = false;
//
//     private status:{isopen:boolean} = {isopen: false};
//
//     private dropDownItemsExample:Array<string> = ['BMW Serie 1', 'BMW Serie 2', 'BMW Serie 3', 'BMW Serie 4'];
//
//     private dropdownMenu($event:MouseEvent):void {
//         $event.preventDefault();
//         $event.stopPropagation();
//         this.status.isopen = !this.status.isopen;
//     }
//
// }
