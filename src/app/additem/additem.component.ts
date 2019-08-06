import { Component, OnInit } from '@angular/core';
import { Item } from '../domain/item';
import { ItemService } from '../services/item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})

export class AdditemComponent implements OnInit {

  additem: Item[];

  navigationSubscription: any;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  // addItem (){
  //   // console.log (formulier.value);
  //   this.itemService.create(this.addItem).subscribe(
  //     (addItem: Item) => this.addItem = addItem,
  //     (fout: HttpErrorResponse) =>
  //       alert("Er is een fout opgetreden: " +
  //         fout.error.error.status + " " + fout.error.error + "\n" +
  //         "\nMessage:\n" + fout.error.message
  //       )
  //       // ()=> this.router.navigate(['addItem'] )
  //   )
  // }
}
