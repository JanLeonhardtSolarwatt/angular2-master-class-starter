import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, OpaqueToken } from '@angular/core';
import { RouterModule } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

import { ContactsAppComponent } from './contacts.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';


import { ContactsAppRoutes } from './app.routes';
import { APP_PROVIDERS } from './app.providers';
import { ContactsListViewComponent } from './contacts-list-view/contacts-list-view.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsDetailComponent,
    ContactsDetailViewComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    ContactsListViewComponent,
    ContactsCreatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule,
    FormsModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: APP_PROVIDERS
})
export class ContactsModule {

}
