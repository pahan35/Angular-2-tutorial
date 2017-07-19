import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component ({
    selector: 'demo-app',
    template: '<div>Hello</div>',
    providers: [ProductService]
})

export   class   AppComponent  {
    iproducts: IProduct[];
    constructor(private _product: ProductService) {
    }
    ngOnInit(): void {
        this._product.getproducts()
            .subscribe(iproducts => this.iproducts = iproducts);
    }
}