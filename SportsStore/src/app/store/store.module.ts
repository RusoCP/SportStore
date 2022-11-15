import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ModelModule } from "../model/model.module";
import { CartDetailComponent } from "./cartDetail.component";
import { cartSummaryComponent } from "./cartSummary.component";
import { CheckoutComponent } from "./checkout.component";
import { CounterDirective } from "./counter.directive";
import { StoreComponent } from "./store.component";

@NgModule({
    imports: [
        ModelModule,
        BrowserModule, 
        FormsModule, 
        FontAwesomeModule,
        RouterModule
    ],
    declarations: [
        StoreComponent, 
        CounterDirective, 
        cartSummaryComponent,
        CartDetailComponent,
        CheckoutComponent
    ],
    exports: [
        StoreComponent,
        CartDetailComponent,
        CheckoutComponent
    ]
})
export class StoreModule { }