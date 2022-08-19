import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponentComponent } from './Components/dynamic-component/dynamic-component.component';
import { StaticComponentComponent } from './Components/static-component/static-component.component';

const routes: Routes = [
  { path: 'static', component: StaticComponentComponent, data: { id: '1', name: "data coming from static " } },
  { path: 'dynamic', component: DynamicComponentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
