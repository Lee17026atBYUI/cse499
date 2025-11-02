package com.tl_cse499.flashflood;

import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "card")
public class Card {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long card_id;

  private Long deck_id;
  private String front;
  private String back;
  private Date created;
  private Long created_by;
  private Date updated;
  private Long updated_by;

  // Constructors, Getters, and Setters
  public Long getId() {
    return card_id;
  }

  public void setId(Long id) {
    this.card_id = id;
  }

  public Long getDeckId() {
    return deck_id;
  }
  public void setDeckId(Long deck_id) {
    this.deck_id = deck_id;
  }

  public String getFront() {
    return front;
  }
  public void setFront(String front) {
    this.front = front;
  }

  public String getBack() {
    return back;
  }
  public void setBack(String back) {
    this.back = back;
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
