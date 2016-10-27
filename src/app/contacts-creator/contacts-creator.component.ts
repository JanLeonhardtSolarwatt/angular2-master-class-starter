import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Router} from "@angular/router";

@Component({
    selector: 'trm-contacts-creator',
    templateUrl: './contacts-creator.component.html',
    styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {

    constructor(private contactService: ContactsService, private router: Router) {
    }

    ngOnInit() {
    }

    saveContact(contact: Contact) {
        this.contactService.createContact(contact).subscribe(() => {
            this.router.navigate(['/']);
        });
    }
}
