import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CounterModule } from "./components/counter/counter.module";
import { EmptyRouteComponent } from "./pages/empty-route/empty-route-component";

const routes: Routes = [{ path: "**", component: EmptyRouteComponent }];

@NgModule({ imports: [RouterModule.forRoot(routes), CounterModule], exports: [RouterModule] })
export class AppRoutingModule {}
