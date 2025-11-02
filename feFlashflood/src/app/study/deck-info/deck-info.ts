import { Component, inject, Input } from '@angular/core';
import { Deck } from '../../cards/deck.model';
import { DeckService } from '../../shared/deck.service';

@Component({
  selector: 'flashflood-deck-info',
  standalone: false,
  templateUrl: './deck-info.html',
  styleUrl: './deck-info.css',
})
export class DeckInfo {
  @Input() deck: Deck;
  selected: boolean = false;

  private deckService = inject(DeckService);

  selectDeck() {
    this.deckService.addStudyDeck(this.deck);
    this.selected = true;
  }

}
