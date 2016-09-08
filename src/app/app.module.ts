import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';

import { WeatherService } from './weather.service';
import { ForecastService } from './forecast.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { WeatherPageComponent } from './weatherpage.component';
import { ForecastPageComponent } from './forecastpage.component';
import { AboutComponent } from './about.component';
import { ErrorComponent } from './error.component';
import { NavigationComponent } from './navigation.component';
import { SimpleChartExample } from './simple-chart-example.component';
import { StockChartExample } from './stock-chart-example.component';
import { WeatherComponent } from './weather.component';
import { WeatherHistory } from './history.component';
import { ForecastComponent } from './forecast.component';
import { NoContent } from './no-content';

import { AppConfiguration } from './app.config.ts';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes,
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        WeatherPageComponent,
        ForecastPageComponent,
        AboutComponent,
        ErrorComponent,
		NavigationComponent,
		SimpleChartExample,
		StockChartExample,
		WeatherComponent,
		WeatherHistory,
		ForecastComponent,
		NoContent,
    ],
    providers: [
        WeatherService,
        ForecastService
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
