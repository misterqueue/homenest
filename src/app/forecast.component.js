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
var forecast_service_1 = require('./forecast.service');
var ForecastComponent = (function () {
    function ForecastComponent(forecastService) {
        this.forecastService = forecastService;
        this.messages = new messages_1.Messages();
        this.me = this;
    }
    ForecastComponent.prototype.clearMessages = function () {
        this.messages.clear();
    };
    ForecastComponent.prototype.dataEvent = function (data) {
        this.clearMessages();
        this.data = data;
    };
    ForecastComponent.prototype.errorEvent = function (error) {
        this.messages.error = error;
        console.error(this.messages.error);
    };
    ForecastComponent.prototype.completeEvent = function () {
    };
    ForecastComponent.prototype.loadForecastData = function () {
        var _this = this;
        this.clearMessages();
        this.messages.information = "Refreshing data...";
        this.forecastService.getForecast().subscribe(function (data) { return _this.dataEvent(data); }, function (error) { return _this.errorEvent(error); }, function () { return _this.completeEvent(); });
    };
    ForecastComponent.prototype.ngOnInit = function () {
        this.loadForecastData();
    };
    ForecastComponent = __decorate([
        core_1.Component({
            selector: 'forecast',
            templateUrl: 'app/forecast.component.html',
            providers: [forecast_service_1.ForecastService],
        }), 
        __metadata('design:paramtypes', [forecast_service_1.ForecastService])
    ], ForecastComponent);
    return ForecastComponent;
}());
exports.ForecastComponent = ForecastComponent;
//# sourceMappingURL=forecast.component.js.map