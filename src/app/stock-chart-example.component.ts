import { Component } from '@angular/core';
 
 @Component({
    selector: 'stock-chart-example',
    //template: `<chart type="StockChart" [options]="options"></chart>`,
	template: `A chart here!`
})
export class StockChartExample {
    // constructor(jsonp : Jsonp) {
    //     jsonp.request('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=JSONP_CALLBACK').subscribe(res => {
    //         this.options = {
    //             credits: { enabled: false },
    //             title : { text : 'AAPL Stock Price' },
    //             series : [{
    //                 name : 'AAPL',
    //                 data : res.json(),
    //                 tooltip: {
    //                     valueDecimals: 2
    //                 }
    //             }]
    //         };
    //     });
    // }
    options: Object;
}