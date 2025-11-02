package com.tl_cse499.flashflood;

import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "deck")
public class Deck {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long deck_id;

  private Long account_id;
  private String name;
  private Date created;
  private Long created_by;
  private Date updated;
  private Long updated_by;

  // Constructors, Getters, and Setters
  public Long getId() {
    return deck_id;
  }

  public void setId(Long id) {
    this.deck_id = id;
  }

  public Long getAccountId() {
    return account_id;
  }
  public void setAccountId(Long account_id) {
    this.account_id = account_id;
  }

  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  public Date getCreated() {
    return created;
  }
  public void setCreated(Date date) {
    this.created = date;
  }

  public Long getCreatedBy() {
    return created_by;
  }
  public void setCreatedBy(Long id) {
    this.created_by = id;
  }

  public Date getUpdated() {
    return updated;
  }
  public void setUpdated(Date date) {
    this.updated = date;
  }

  public Long getUpdatedBy() {
    return updated_by;
  }
  public void setUpdatedBy(Long id) {
    this.updated_by = id;
  }
}
