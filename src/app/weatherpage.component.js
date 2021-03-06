"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var weather_component_1 = require('./weather.component');
var history_component_1 = require('./history.component');
var WeatherPageComponent = (function () {
    function WeatherPageComponent() {
    }
    WeatherPageComponent = __decorate([
        core_1.Component({
            selector: 'weatherpage',
            templateUrl: 'app/weatherpage.component.html',
            directives: [
                weather_component_1.WeatherComponent,
                history_component_1.WeatherHistory
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], WeatherPageComponent);
    return WeatherPageComponent;
}());
exports.WeatherPageComponent = WeatherPageComponent;
//# sourceMappingURL=weatherpage.component.js.map