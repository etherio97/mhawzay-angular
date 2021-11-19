import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TemplateComponent } from "./[template].component";

const routes: Routes = [
  {
    path: "",
    component: TemplateComponent,
  },
];

@NgModule({
  declarations: [TemplateComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileModule {}
