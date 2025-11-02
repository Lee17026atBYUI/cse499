package com.tl_cse499.flashflood;

import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "account")
public class Account {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long account_id;

  private String email;
  private String password;
  private Date created;

  // Constructors, Getters, and Setters
  public Long getId() {
    return account_id;
  }

  public void setId(Long id) {
    this.account_id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Date getCreated() {
    return created;
  }

  public void setCreated(Date date) {
    this.created = date;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
