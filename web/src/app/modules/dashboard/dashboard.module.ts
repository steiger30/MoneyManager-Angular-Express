import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FinanceComponent } from './container/finance/finance.component';
import { FinanceTableComponent } from './components/finance-table/finance-table.component';
import { FinanceControlComponent } from './components/finance-control/finance-control.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    FinanceComponent,
    FinanceTableComponent,
    FinanceControlComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DashboardModule {}
