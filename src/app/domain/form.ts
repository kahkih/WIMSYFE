export class Form {
    constructor(
        // private id: number,
        private itemName: string,
        private itemDescription: string,
        private containerName: string,
        private locationName: string
    ) {

    }
    // get itemId() : number {return this.id}
get getItemName() : string {return this.itemName}
get getItemDescription() : string {return this.itemDescription}
get getContainerName() : string {return this.containerName}
get getLocationName() : string {return this.locationName}
set setItemName(itemName: string) {this.itemName = itemName}
set setItemDescription(itemDescription: string) {this.itemDescription = itemDescription}
set setContainerName(containerName: string) {this.containerName = containerName}
set setLocationName(locationName: string) {this.locationName = locationName}
// set itemName(name: string) {this.name = name}
// set itemDescription(description: string) {this.description = description}
}
