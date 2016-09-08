import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WeatherPageComponent } from './weatherpage.component';
import { ForecastPageComponent } from './forecastpage.component';
import { AboutComponent } from './about.component';
import { NoContent } from './no-content/no-content';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'weather',
		component: WeatherPageComponent
	},
	{
		path: 'forecast',
		component: ForecastPageComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: '**',
		component: NoContent
	},
];

export const routes = RouterModule.forRoot(appRoutes);
