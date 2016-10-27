import { Routes } from '@angular/router';

import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import {ContactsListViewComponent} from "./contacts-list-view/contacts-list-view.component";

export const ContactsAppRoutes: Routes = [
  {path: '', component: ContactsListViewComponent},
  {path: 'contact/:id', component: ContactsDetailViewComponent},
  {path: 'contact/:id/edit', component: ContactsEditorComponent},
  {path: '**', redirectTo: ''}
];
