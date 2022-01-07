import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddParentComponent } from './components/parent/add-parent/add-parent.component';
import { ListParentsComponent } from './components/parent/list-parents/list-parents.component';
import { ParentDetailsComponent } from './components/parent/parent-details/parent-details.component';

const routes: Routes = [
  {path:'',redirectTo:'parents',pathMatch:'full'},
  {path:'parents',component:ListParentsComponent},
  {path:'parents/:id',component:ParentDetailsComponent},
  {path:'add',component:AddParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
