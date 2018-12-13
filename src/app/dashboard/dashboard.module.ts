/**
 * @author - Ronak Patel.
 * @description -
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartModule, LineChartModule, BarChartModule } from '@swimlane/ngx-charts';
// ---------------------------------------------------------------------------------------------------//
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { CardComponent } from './stats-card/card/card.component';
import { StatsGraphComponent } from './stats-graph/stats-graph.component';
import { StatsTableComponent } from './stats-table/stats-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PieChartModule,
    LineChartModule,
    BarChartModule
  ],
  declarations: [StatsCardComponent,
    CardComponent,
    StatsGraphComponent,
    StatsTableComponent,
    DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
