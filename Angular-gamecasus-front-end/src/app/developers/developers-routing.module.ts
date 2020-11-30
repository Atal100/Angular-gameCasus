import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DevelopersListComponent } from "./developers-list/developers-list.component";
import { DevelopersEditComponent } from "./developers-edit/developers-edit.component";
import { DevelopersDetailsComponent } from "./developers-details/developers-details.component";
import { DevelopersComponent } from "./developers.component";
import { DevelopersNewComponent } from "./developers-new/developers-new.component";
//import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  { path: "developers/list", component: DevelopersListComponent },
  {
    path: "developers/list/new",
    component: DevelopersNewComponent,
    data: {
      title: "New developer"
    },
   // canActivate: [AuthGuard]
  },
  { path: "developers/list/:id", component: DevelopersDetailsComponent },
  {
    path: "developers/list/:id/edit",
    component: DevelopersEditComponent,
    data: {
      title: "Edit developer"
    },
    //canActivate: [AuthGuard]
  },

  {
    path: "developers",
    component: DevelopersComponent,
    children: [
      { path: "", component: DevelopersDetailsComponent },
      { path: "new", component: DevelopersNewComponent}, //canActivate: [AuthGuard] },
      { path: ":id", component: DevelopersDetailsComponent },
      {
        path: ":id/edit",
        component: DevelopersEditComponent,
      //  canActivate: [AuthGuard]
      },
      { path: "**", component: DevelopersComponent }
    ]
  }
];

@NgModule({
  imports: [
    // Always use forChild in child route modules!
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DevelopersRoutingModule {}