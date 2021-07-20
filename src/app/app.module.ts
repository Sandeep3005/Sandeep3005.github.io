import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AvatarModule } from "ngx-avatar";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HamNavbarComponent } from "./ham-navbar/ham-navbar.component";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ResumeComponent } from "./resume/resume.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { PdfViewerModule } from "ng2-pdf-viewer";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HamNavbarComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactMeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    BrowserAnimationsModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
