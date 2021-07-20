import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ham-navbar",
  templateUrl: "./ham-navbar.component.html",
  styleUrls: ["./ham-navbar.component.css"],
})
export class HamNavbarComponent implements OnInit {
  openMenuStatus: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    this.openMenuStatus = !this.openMenuStatus;
  }
}
