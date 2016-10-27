import { Component } from '@angular/core';
import {EventBusService} from "./eventbus.comonent";

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  private title: string = 'Contacts';

  constructor(private eventbusService: EventBusService) {
    eventbusService.observe('appTitleChanged').subscribe(title => this.title = title);
  }


}
