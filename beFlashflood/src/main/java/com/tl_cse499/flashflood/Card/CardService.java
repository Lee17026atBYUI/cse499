package com.tl_cse499.flashflood;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CardService {
  @Autowired
  private CardRepository cardRepository;

  public Card createAccount(Card card) {
    return cardRepository.save(card);
  }

  public List<Card> getAllCards() {
    return cardRepository.findAll();
  }
  
}
