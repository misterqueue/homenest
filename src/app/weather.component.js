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
var messages_1 = require('./messages');
var weather_service_1 = require('./weather.service');
var error_component_1 = require('./error.component');
var WeatherComponent = (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.messages = new messages_1.Messages();
        this.me = this;
    }
    WeatherComponent.prototype.clearMessages = function () {
        this.messages.clear();
    };
    WeatherComponent.prototype.dataEvent = function (data) {
        this.clearMessages();
        this.data = data;
    };
    WeatherComponent.prototype.errorEvent = function (error) {
        this.messages.error = error;
        console.error(this.messages.error);
        this.errorComponent.setError(this.messages.error);
    };
    WeatherComponent.prototype.completeEvent = function () {
    };
    WeatherComponent.prototype.loadWeatherData = function () {
        var _this = this;
        this.clearMessages();
        this.messages.information = "Refreshing data...";
        this.weatherService.getWeather().subscribe(function (data) { return _this.dataEvent(data); }, function (error) { return _this.errorEvent(error); }, function () { return _this.completeEvent(); });
    };
    WeatherComponent.prototype.ngOnInit = function () {
        this.loadWeatherData();
    };
    __decorate([
        core_1.ViewChild(error_component_1.ErrorComponent), 
        __metadata('design:type', error_component_1.ErrorComponent)
    ], WeatherComponent.prototype, "errorComponent", void 0);
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'weather',
            templateUrl: 'app/weather.component.html',
            providers: [weather_service_1.WeatherService, error_component_1.ErrorComponent],
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map