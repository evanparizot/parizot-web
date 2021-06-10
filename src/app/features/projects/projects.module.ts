import { ProjectsComponent } from "./projects/projects.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";
import { ProjectComponent } from "./project/project.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { MarkdownModule } from "ngx-markdown";
import { EditProjectComponent } from "./edit-project/edit-project.component";

const routes: Routes = [
  {
    path: "",
    component: ProjectsComponent,
    data: { title: "Projects" },
  },
  {
    path: "404",
    component: NotFoundComponent,
  },
  {
    path: ":id",
    component: ProjectComponent,
  },
  {
    path: ":id/edit",
    component: EditProjectComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    NotFoundComponent,
    EditProjectComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MarkdownModule.forChild(),
  ],
})
export class ProjectsModule {}
