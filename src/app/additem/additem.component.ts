import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Form } from '../domain/form';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})

export class AdditemComponent implements OnInit {

  addForm: Form;

  // navigationSubscription: any;
  // http: any;

  constructor(private addFormService: FormService, private router: Router) { }

  ngOnInit() {
  }

  addItemToForm(addItemForm: NgForm){
    // console.log (this.additem.itemName);
    this.addForm = new Form(addItemForm.value.itemName, addItemForm.value.itemDescription, addItemForm.value.containerName, addItemForm.value.locationName)
    // console.log(this.addForm.getItemName);
    // console.log(this.addForm.getItemDescription);
    // console.log(this.addForm.getContainerName);
    // console.log(this.addForm.getLocationName);
    this.addFormService.create(this.addForm).subscribe(
      (addForm: Form) => this.addForm = addForm,

      (fout: HttpErrorResponse) =>
        alert("Er is een fout opgetreden: " +
          fout.error.error.status + " " + fout.error.error + "\n" +
          "\nMessage:\n" + fout.error.message
        )
        // ()=> this.router.navigate(['items'] )
    )
  }

  
}
