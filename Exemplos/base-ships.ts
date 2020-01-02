//Exemplos Anteriores App.ts...

class Spacecraft{
    
    constructor(public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entrado no hiper espaço com ${this.propulsor}`)
    }
}

//Interface

interface Containership{
    cargoContainers: number
}

export { Spacecraft, Containership}