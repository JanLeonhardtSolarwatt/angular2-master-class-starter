import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import {EventBusService} from "../eventbus.comonent";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact: Contact = <Contact>{ address: {}};

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private eventbusService: EventBusService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id)
      .subscribe(contact => {
        this.contact = contact;
        this.eventbusService.emit('appTitleChanged', 'Editor: '+this.contact.name);
      });

  }

  goToDetails(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact)
      .subscribe(res => {
        if (res.status === 200) {
          this.goToDetails(contact);
        }
      });
  }

}
