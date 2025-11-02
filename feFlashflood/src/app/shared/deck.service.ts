import { inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { DataStorageService } from './data-storage.service';
import { Deck } from '../cards/deck.model';

@Injectable({
  providedIn: 'root'
})
export class DeckService implements OnInit, OnDestroy {
  private dataService = inject(DataStorageService);

  private allDecks: Deck[] = [];
  private studyDecks: Deck[] = [];
  private dataSubscription: Subscription;
  allDecksChanged = new Subject<Deck[]>;
  studyDecksChanged = new Subject<Deck[]>;

  ngOnInit(): void {
    this.dataSubscription = this.dataService.get<Deck[]>('decks').subscribe(
      (decks: Deck[]) => {
        this.allDecks = decks;
        this.sendAllDecksChanged();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  getAllDecks() {
    return this.dataService.get<Deck[]>('decks').subscribe(
      (decks: Deck[]) => {
        this.allDecks = decks;
        this.sendAllDecksChanged();
        return this.allDecks.slice();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private sendAllDecksChanged() {
    this.allDecksChanged.next(this.allDecks.slice());
  }

  private sendStudyDecksChanged() {
    this.studyDecksChanged.next(this.studyDecks.slice());
  }

  setStudyDecks(studyDecks: Deck[]) {
    this.studyDecks = studyDecks;
    this.sendStudyDecksChanged();
  }

  addStudyDeck(deck: Deck) {
    // first check if that deck is already in
    if (this.studyDecks.includes(deck)) {
      return;
    }
    
    this.studyDecks.push(deck);
    this.sendStudyDecksChanged;
    console.log('study deck', this.studyDecks);
  }
  
}
