import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';
import { LoanService } from '../shared/loan.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.page.html',
  styleUrls: ['./add-items.page.scss'],
})
export class AddItemsPage {
  @ViewChild('searchBar', {static: false}) searchBar: IonSearchbar
  items: Item[];

  constructor(
    private router:Router,
    private itemService: ItemService) {

    this.items = this.itemService.getAll();
  }

  save(){
    this.router.navigate(['/tabs/new-loan']);
  }

  search(event) {
    // Get the text typed by the user in the search bar
    const text = event.target.value;
    // Get all items again from the service
    const allItems = this.itemService.getAll();

    if (text && text.trim() !== '') {
      // Use all items to filter
      this.items = allItems.filter(
        item => item.id.toLowerCase().includes(text.toLowerCase()));
    } else {
      // Blank text, clear the search, show all products
      this.items = allItems;
    }
  }

  refresh(event) {
    this.searchBar.value = '';
    event.target.complete();
  }

}
