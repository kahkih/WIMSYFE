import { Component, OnInit } from '@angular/core';
import {Container} from '../domain/container';
import{ContainerService} from '../services/container.service';
import{Observable} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  containers: Container[];

  container$: Observable<Container[]>;

  constructor(private containerService: ContainerService) { }

  ngOnInit() {
    this.containerService.retrieveAll().subscribe(
      (containers: Container[]) => this.containers = containers,
    (error: HttpErrorResponse) => 
      alert("Er is een fout opgetreden: " +
      error.error.error.status + " " + error.error.error + "\n" +
      "\nMessage:\n" + error.error.message 
    )
  )
}

}
