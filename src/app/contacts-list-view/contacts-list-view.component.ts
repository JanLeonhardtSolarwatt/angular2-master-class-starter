import { Component, OnInit } from '@angular/core';
import {Subject, Observable} from "rxjs";
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Router} from "@angular/router";

@Component({
  selector: 'trm-contacts-list-view',
  templateUrl: './contacts-list-view.component.html',
  styleUrls: ['./contacts-list-view.component.css']
})
export class ContactsListViewComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts()
        .takeUntil(this.terms$)
        .merge(this.contactsService.search(this.terms$));
  }
  showContact(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }
}
