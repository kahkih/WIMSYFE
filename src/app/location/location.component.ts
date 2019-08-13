import { Component, OnInit } from '@angular/core';
import {Location} from '../domain/location';
import{LocationService} from '../services/location.service';
import{Observable} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  

  locations: Location[];

  locationFilter: any = {locationName: ''};
  locationFilterContainerName: any = {containerName: ''}
  locationFilterItemName: any = {itemName: ''};


  location$: Observable<Location[]>;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.retrieveAll().subscribe(
      (locations: Location[]) => this.locations = locations,
    (error: HttpErrorResponse) => 
      alert("Er is een fout opgetreden: " +
      error.error.error.status + " " + error.error.error + "\n" +
      "\nMessage:\n" + error.error.message 
    )
  )
}

}
