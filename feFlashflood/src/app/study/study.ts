import { Component, inject, OnDestroy, OnInit } from '@angular/core';

import { DeckService } from '../shared/deck.service';
import { Deck } from '../cards/deck.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'flashflood-study',
  standalone: false,
  templateUrl: './study.html',
  styleUrl: './study.css',
})
export class Study implements OnInit, OnDestroy {
  private deckService = inject(DeckService);

  allDecks: Deck[] = [];
  private studyDecks: Deck[] = [];
  private adSubscription: Subscription;

  ngOnInit(): void {
    this.deckService.getAllDecks();

    this.adSubscription = this.deckService.allDecksChanged.subscribe((decks: Deck[]) => {
      this.allDecks = decks;
    });
  }

  ngOnDestroy(): void {
    this.adSubscription.unsubscribe();
  }

}
