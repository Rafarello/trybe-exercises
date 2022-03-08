"use strict";
var MiddleEarthPeople = /** @class */ (function () {
    function MiddleEarthPeople(name, familyName, height) {
        this._name = name;
        this._familyName = familyName;
        this.height = height;
    }
    Object.defineProperty(MiddleEarthPeople.prototype, "name", {
        get: function () {
            return "".concat(this._name);
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MiddleEarthPeople.prototype, "familyName", {
        get: function () {
            return this._familyName;
        },
        enumerable: false,
        configurable: true
    });
    return MiddleEarthPeople;
}());
var rafael = new MiddleEarthPeople('Rafael', 'Moraes', 178);
rafael.name = 'Rocha';
function greet(person) {
    console.log("Ol\u00E1, ".concat(person.name));
}
greet(rafael);
