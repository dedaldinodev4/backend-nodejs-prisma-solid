

export class Product {
  id?: string;
  name: string;
  price: number;
  bar_code: string;
  created_at: Date;

  constructor(name: string, price: number, bar_code: string) {
    this.name = name
    this.price = price
    this.bar_code = bar_code

    this.created_at = new Date()
  }
}