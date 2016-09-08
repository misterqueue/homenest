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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var weather_service_1 = require('./weather.service');
var forecast_service_1 = require('./forecast.service');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard.component');
var weatherpage_component_1 = require('./weatherpage.component');
var forecastpage_component_1 = require('./forecastpage.component');
var about_component_1 = require('./about.component');
var error_component_1 = require('./error.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                weatherpage_component_1.WeatherPageComponent,
                forecastpage_component_1.ForecastPageComponent,
                about_component_1.AboutComponent,
                error_component_1.ErrorComponent,
            ],
            providers: [
                weather_service_1.WeatherService,
                forecast_service_1.ForecastService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map