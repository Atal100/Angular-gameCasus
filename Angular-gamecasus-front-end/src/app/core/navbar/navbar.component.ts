import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
//import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],

})
export class NavbarComponent {
  //constructor(private authService: AuthService, private router: Router) {}

  //@Input() apptitle: string;
  //isLoggedIn$: Observable<boolean>;

  ngOnInit() {
  //  this.isLoggedIn$ = this.authService.userIsLoggedIn;
  }

  onLogout() {
 //   this.authService.userLogOut();
  }

 // @Input() title: string;
  //isNavbarCollapsed = true;
}
