package com.tl_cse499.flashflood;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeckService {
  @Autowired
  private DeckRepository deckRepository;

  public Deck createAccount(Deck deck) {
    return deckRepository.save(deck);
  }

  public List<Deck> getAllDecks() {
    return deckRepository.findAll();
  }
  
}
