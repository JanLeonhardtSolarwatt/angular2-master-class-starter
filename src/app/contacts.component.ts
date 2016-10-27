import {Component} from '@angular/core';
import {EventBusService} from "./eventbus.comonent";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'trm-contacts-app',
    templateUrl: 'contacts.component.html',
    styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
    private title: string = 'Contacts';

    constructor(private eventbusService: EventBusService, private titleService: Title) {
        eventbusService.observe('appTitleChanged').subscribe(title => {
            this.title = title;
            this.titleService.setTitle(title);
        });
    }
}
