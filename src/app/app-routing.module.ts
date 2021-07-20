import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ResumeComponent } from "./resume/resume.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "portfolio",
    component: PortfolioComponent,
  },
  {
    path: "contact",
    component: ContactMeComponent,
  },
  {
    path: "resume",
    component: ResumeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
