import { Component, OnInit } from '@angular/core';
import{ItemService} from '../services/item.service';
import{Observable} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Form } from '../domain/form';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-moveitem',
  templateUrl: './moveitem.component.html',
  styleUrls: ['./moveitem.component.css']
})
export class MoveitemComponent implements OnInit {

  moveForm : Form;

  constructor(private formService: FormService, private router: Router) { }

  ngOnInit() {
  }

  moveItemFromForm(moveItemForm: any) {
    console.log (moveItemForm.value);
    this.formService.update(moveItemForm.value).subscribe({
      // next: (moveItemForm: any) => this.moveItem = moveItem,

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
