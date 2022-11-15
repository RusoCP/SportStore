import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html"
})
export class cartSummaryComponent {

    faCart = faCartShopping;

    constructor(public cart: Cart) {
        
    }
}