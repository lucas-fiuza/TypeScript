import {Spacecraft, Containership} from './base-ships'
import {MilleniumFalcon} from './starfighters'


let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()


let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace();

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`A Falcon é boa para carga? ${goodForTheJob(falcon) ? 'Sim' : 'Não' }`)


