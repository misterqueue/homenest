import { Component } from '@angular/core';
 
@Component({
    selector: 'simple-chart-example',
    //template: `<chart [options]="options"></chart>`,
	template: `A chart here!`
})
export class SimpleChartExample {
    constructor() {
        this.options = {
            credits: { enabled: false },
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: Object;
}