import { Component, OnInit } from '@angular/core';
import {Item} from '../domain/item';
import{ItemService} from '../services/item.service';
import{Observable} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finditem',
  templateUrl: './finditem.component.html',
  styleUrls: ['./finditem.component.css']
})
export class FinditemComponent implements OnInit {

  findItem: Item;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
  }

  findItemFromForm(findItemForm: any) {
    console.log (findItemForm.name);
    this.itemService.findbyName(findItemForm.value).subscribe({
      // next: (findItemForm: any) => findItemForm = findItemForm,

      error: (fout: HttpErrorResponse) =>
        alert("Er is een fout opgetreden: " +
          fout.error.error.status + " " + fout.error.error + "\n" +
          "\nMessage:\n" + fout.error.message
        ),
        // complete: () => { this.router.navigate(['autos']) }
    }
    )
  }
}
