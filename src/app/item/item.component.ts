import { Component, OnInit } from '@angular/core';
import {Item} from '../domain/item';
import{ItemService} from '../services/item.service';
import{Observable} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[];

  item$: Observable<Item[]>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
      this.itemService.retrieveAll().subscribe(
        (items: Item[]) => this.items = items,
      (error: HttpErrorResponse) => 
        alert("Er is een fout opgetreden: " +
        error.error.error.status + " " + error.error.error + "\n" +
        "\nMessage:\n" + error.error.message 
      )
    )
    
  }

  item : Item;

  addItem (){
    // console.log (formulier.value);
    this.itemService.create(this.item).subscribe(
      (item: Item) => this.item = item,
      (fout: HttpErrorResponse) =>
        alert("Er is een fout opgetreden: " +
          fout.error.error.status + " " + fout.error.error + "\n" +
          "\nMessage:\n" + fout.error.message
        )
        // ()=> this.router.navigate(['items'] )
    )
  }

}
