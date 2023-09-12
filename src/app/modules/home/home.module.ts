import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { reducer } from "../shared/core/shared.reducer";

@NgModule({
    imports: [HomeRoutingModule, CommonModule, StoreModule.forFeature('shared', reducer)],
    declarations: [HomeComponent]
})
export class HomeModule { }