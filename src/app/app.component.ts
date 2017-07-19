import { Component } from '@angular/core';  

@Component ({
    selector: 'demo-app',
    template: '<ul>\n' +
    '    <li><a [routerLink] = "[\'/Product\']">Product</a></li>\n' +
    '    <li><a [routerLink] = "[\'/Inventory\']">Inventory</a></li>\n' +
    '        </ul>\n' +
    '        <router-outlet></router-outlet>' ,
})

export class AppComponent  { }
