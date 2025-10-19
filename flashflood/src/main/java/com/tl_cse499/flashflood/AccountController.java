package com.tl_cse499.flashflood;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/accounts")
public class AccountController {
  @Autowired
  private AccountService accountService;

  // Get all users
  @GetMapping
  public List<Account> getAllAccounts() {
    return accountService.getAllAccounts();
  }

}
