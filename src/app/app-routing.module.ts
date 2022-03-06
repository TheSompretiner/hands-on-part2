import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './page/form/form.component';
import { ViewComponent } from './page/view/view.component';
import { WelcomeComponent } from './page/welcome/welcome.component';


const routes: Routes = [
  { path : "add", component: FormComponent, data : {formType: "add"}},
  { path : "edit/:id", component: FormComponent, data : {formType: "edit"}},
  { path : "view", component: ViewComponent},
  { path : "", component: WelcomeComponent},
  { path : "**", redirectTo:""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
