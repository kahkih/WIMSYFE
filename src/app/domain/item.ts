export class Item {
    constructor(
        private _id: number,
        private _name: string,
        private _description: string
    ) {

    }
    get id() : number {return this.id}
get name() : string {return this.name}
get description() : string {return this.description}
}
