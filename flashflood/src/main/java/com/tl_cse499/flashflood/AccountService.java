package com.tl_cse499.flashflood;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {
  @Autowired
  private AccountRepository accountRepository;

  public Account createAccount(Account account) {
    return accountRepository.save(account);
  }

  public List<Account> getAllAccounts() {
    return accountRepository.findAll();
  }
  
}
