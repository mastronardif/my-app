import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WtfComponent } from './comps/wtf/wtf.component';
import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';
import { AddressComponent } from './comps/address/address.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { TableComponent } from './comps/table/table.component';
import { TreeComponent } from './comps/tree/tree.component';

const routes: Routes = [
  {
    path: 'compose',
    component: WtfComponent,
    outlet: 'popup'
  },

  { path: 'address',  component: AddressComponent },

  { path: 'wtf',  component: WtfComponent },
  { path: 'wtf/:id', component: WtfComponent },

  { path: 'table',  component: TableComponent },
  { path: 'tree',  component: TreeComponent },
  { path: 'dashboard',  component: DashboardComponent },


  { path: '',   redirectTo: '/myapp', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

  //{ path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
