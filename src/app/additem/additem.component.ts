import { Component, OnInit } from '@angular/core';
import { Item } from '../domain/item';
import { ItemService } from '../services/item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})

export class AdditemComponent implements OnInit {

  addItem: Item;

  // navigationSubscription: any;
  // http: any;

  constructor(private additemService: ItemService, private router: Router) { }

  ngOnInit() {
  }

  addItemToForm(addItemForm: NgForm){
    // console.log (this.additem.itemName);
    this.addItem = new Item(addItemForm.value.name, addItemForm.value.description)
    console.log(this.addItem.itemName);
    console.log(this.addItem.itemDescription);
    // console.log(this.addItem.description);
    this.additemService.create(this.addItem).subscribe(
      (additem: Item) => this.addItem = additem,

      (fout: HttpErrorResponse) =>
        alert("Er is een fout opgetreden: " +
          fout.error.error.status + " " + fout.error.error + "\n" +
          "\nMessage:\n" + fout.error.message
        )
        // ()=> this.router.navigate(['items'] )
    )
  }

  
}
