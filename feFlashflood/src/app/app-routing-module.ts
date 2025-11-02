import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Study } from './study/study';
import { Cards } from './cards/cards';
import { Accounts } from './accounts/accounts';
import { NotFound } from './not-found/not-found';
import { StudyCards } from './study/study-cards/study-cards';

const routes: Routes = [
  {path: '', redirectTo: '/study', pathMatch: 'full'},
  // {path: 'study', component: Study, children: [
  //   {path: 'go', component: StudyCards}
  // ]},
  {path: 'study', component: Study},
  {path: 'study_time', component: StudyCards},
  {path: 'decks', component: Cards},
  {path: 'account', component: Accounts},
  {path: '404', component: NotFound},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
