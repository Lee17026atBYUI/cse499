import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Accounts } from './accounts/accounts';
import { Cards } from './cards/cards';
import { Study } from './study/study';
import { NotFound } from './not-found/not-found';
import { Header } from './header';
import { DeckInfo } from './study/deck-info/deck-info';
import { DropdownDirective } from './shared/dropdown.directive';
import { StudyCards } from './study/study-cards/study-cards';

@NgModule({
  declarations: [
    App,
    Accounts,
    Cards,
    Study,
    NotFound,
    Header,
    DeckInfo,
    DropdownDirective,
    StudyCards
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
