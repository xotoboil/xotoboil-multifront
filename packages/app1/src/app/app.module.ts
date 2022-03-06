import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "src/store/rootReducer";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {CounterModule} from "./counter/counter.module";
import {EmptyRouteComponent} from "./empty-route/empty-route-component";

@NgModule({
	declarations: [AppComponent, EmptyRouteComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, CounterModule, StoreModule.forRoot(rootReducer)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
