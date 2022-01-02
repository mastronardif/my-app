import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { WtfComponent } from './comps/wtf/wtf.component';
import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';
import { RootComponent } from './comps/root/root.component';
import { AddressComponent } from './comps/address/address.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TreeComponent } from './comps/tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { TableComponent } from './comps/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { AccordianComponent } from './comps/accordian/accordian.component';
import { DialogBoxComponent } from './comps/dialog-box/dialog-box.component';

//const routes: Routes = []
@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    WtfComponent,
    PageNotFoundComponent,
    RootComponent,
    AddressComponent,
    DashboardComponent,
    TreeComponent,
    TableComponent,
    AccordianComponent,
    DialogBoxComponent
  ],
  imports: [

    BrowserModule,
    //RouterModule.forRoot(routes),
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    LayoutModule,
    CdkAccordionModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
