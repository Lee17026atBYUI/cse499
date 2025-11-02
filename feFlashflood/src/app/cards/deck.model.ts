export class Deck {
  constructor(
    public id: number,
    public account_id: number,
    public name: string,
    public created: Date,
    public created_by: number,
    public updated: Date,
    public updated_by: number
  ) {
    
  }
}
