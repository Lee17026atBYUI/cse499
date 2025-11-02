import { inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { DataStorageService } from '../shared/data-storage.service';
import { Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnInit, OnDestroy {
  private dataService = inject(DataStorageService);

  studyCardsChanged = new Subject<Card[]>;

  private studyCards: Card[] = [];

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    
  }

  getStudyCards() {
    this.dataService.get<Card[]>('cards').subscribe((cards: Card[]) => {
      this.studyCards = cards;
      this.sendStudyDecksChanged();
    });
  }

  sendStudyDecksChanged() {
    this.studyCardsChanged.next(this.studyCards.slice());
  }
  
}
