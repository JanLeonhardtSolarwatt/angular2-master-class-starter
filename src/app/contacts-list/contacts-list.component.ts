import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts.service';
import {Subject} from "rxjs";


@Component({
    selector: 'trm-contacts-list',
    templateUrl: './contacts-list.component.html',
    styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
    @Input() contact: Contact;
    @Output() showContact = new EventEmitter<Contact>();

    constructor() {
    }

    ngOnInit() {

    }
}
