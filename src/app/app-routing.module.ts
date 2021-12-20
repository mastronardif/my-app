import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WtfComponent } from './comps/wtf/wtf.component';

const routes: Routes = [
  { path: 'wtf',  component: WtfComponent },
  { path: 'wtf/:id', component: WtfComponent }

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
