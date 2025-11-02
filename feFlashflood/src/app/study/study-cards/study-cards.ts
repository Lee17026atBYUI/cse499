import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { DeckService } from '../../shared/deck.service';
import { Card } from '../../cards/card.model';
import { CardService } from '../../cards/card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'flashflood-study-cards',
  standalone: false,
  templateUrl: './study-cards.html',
  styleUrl: './study-cards.css',
})
export class StudyCards implements OnInit, OnDestroy {
  private deckService = inject(DeckService);
  private cardService = inject(CardService);

  deck: Card[] = [];
  private studyCardsSubscription: Subscription;
  currentCard: Card;
  display: string;
  face: string = 'front';
  i: number = 0;

  ngOnInit(): void {
    this.studyCardsSubscription = this.cardService.studyCardsChanged.subscribe((cards: Card[]) => {
      this.deck = cards;
      this.currentCard = this.deck[this.i];
      this.display = this.currentCard.front;
      console.log(this.deck);
    });
    this.cardService.getStudyCards();
    this.currentCard = this.deck[this.i];
    
  }

  ngOnDestroy(): void {
    this.studyCardsSubscription.unsubscribe();
  }

  flip() {
    this.face = this.face === 'front' ? 'back' : 'front';
    if (this.face === 'front') {
      this.display = this.currentCard.front;
    } else {
      this.display = this.currentCard.back;
    }
  }

  next() {
    this.i++;

    if (!this.deck[this.i]) {
      return;
    }

    this.currentCard = this.deck[this.i];
    this.display = this.currentCard.front;
    this.face = 'front';


  }
}
