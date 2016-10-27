import {Http, URLSearchParams} from '@angular/http';
import {Injectable, Inject} from '@angular/core';

import {Contact} from './models/contact';

import {API_ENDPOINT} from './app.tokens';
import {Observable} from "rxjs";

@Injectable()
export class ContactsService {

    constructor(private http: Http,
                @Inject(API_ENDPOINT) private api) {
    }

    getContacts() {
        return this.http.get(`${this.api}/contacts`)
            .map(res => res.json())
            .map(data => data.items);
    }

    getContact(id: string) {
        return this.http.get(`${this.api}/contacts/${id}`)
            .map(res => res.json())
            .map(data => data.item);
    }

    updateContact(contact: Contact) {
        return this.http.put(`${this.api}/contacts/${contact.id}`, contact);
    }

    rawSearch(term: string) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('text', term);

        return this.http.get(`${this.api}/search`, {search: params})
            .map(res => res.json())
            .map(data => data.items);
    }

    search(terms: Observable<string>, debounceMs = 400): Observable<Array<Contact>> {
        return terms.debounceTime(debounceMs)
            .distinctUntilChanged()
            .switchMap(term => this.rawSearch(term));
    }

}
