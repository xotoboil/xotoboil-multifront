import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "@/environments/environment";
import { rootReducer } from "@/app/store/root-reducer";

import { AppRoutingModule } from "@/app/app-routing.module";
import { AppComponent } from "@/app/app.component";
import { CounterModule } from "@/app/components/counter/counter.module";
import { EmptyRouteComponent } from "@/app/pages/empty-route/empty-route-component";

@NgModule({
	declarations: [AppComponent, EmptyRouteComponent],
	imports: [
		StoreModule.forRoot(rootReducer),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		CounterModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
