"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var weatherpage_component_1 = require('./weatherpage.component');
var forecastpage_component_1 = require('./forecastpage.component');
var about_component_1 = require('./about.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'weather',
        component: weatherpage_component_1.WeatherPageComponent
    },
    {
        path: 'forecast',
        component: forecastpage_component_1.ForecastPageComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map