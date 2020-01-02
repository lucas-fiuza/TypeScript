"use strict";
//Exemplos Anteriores App.ts...
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entrado no hiper espa\u00E7o com " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
