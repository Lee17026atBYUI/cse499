export class Card {
  constructor(
    public id: number,
    public deck_id: number,
    public front: string,
    public back: string,
    public created: Date,
    public created_by: number,
    public updated: Date,
    public updated_by: number
  ) {}
}
