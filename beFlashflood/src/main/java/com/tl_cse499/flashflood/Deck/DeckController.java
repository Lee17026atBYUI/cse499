package com.tl_cse499.flashflood;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
// @RequestMapping("/accounts")
public class DeckController {
  @Autowired
  private DeckService deckService;

  // Get all decks
  @GetMapping("/decks")
  public List<Deck> getAllDecks() {
    return deckService.getAllDecks();
  }

}
