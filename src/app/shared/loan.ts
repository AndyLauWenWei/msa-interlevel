import { Item } from './item';

export class Loan {
  items: Item[] = [];

  constructor(
    public username: string,
    public status: string,
    public duedate: Date,
    public id?:string) {
      this.username = username;
      this.status = status;
      this.duedate = duedate;
      this.id = id;
     }

}
