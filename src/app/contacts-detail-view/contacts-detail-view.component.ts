import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../models/contact";
import {EventBusService} from "../eventbus.comonent";

@Component({
    selector: 'trm-contacts-detail-view',
    templateUrl: './contacts-detail-view.component.html',
    styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
    contact: Contact;

    constructor(private contactsService: ContactsService,
                private route: ActivatedRoute,
                private router: Router,
                private eventbusService: EventBusService) {
        let id = this.route.snapshot.params['id'];

        this.contactsService.getContact(id)
            .subscribe(contact => {
                this.contact = contact;
                this.eventbusService.emit('appTitleChanged', this.contact.name);
            });
    }

    ngOnInit() {

    }

    editContact(contact: Contact) {
        this.router.navigate(['/contact', contact.id,'edit']);
    }
    backToList() {
        this.router.navigate(['/']);
    }
}
