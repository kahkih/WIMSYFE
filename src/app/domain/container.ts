export class Container {

    constructor(
    private containerName: string
    ) {}

    get getContainerName() : string {return this.containerName}

set setContainerName(containerName: string) {this.containerName = containerName}

}

