export class Location {

    constructor(
        private locationName: string
    ){}

    get getLocationName() : string {return this.locationName}
    set setLocationName(locationName: string){this.locationName=locationName}
}
