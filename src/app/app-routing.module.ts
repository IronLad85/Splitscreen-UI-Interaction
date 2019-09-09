import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingpageComponent } from "./landingpage/landingpage.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "home", component: LandingpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
