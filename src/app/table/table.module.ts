/**
 * @author sonal prajpati
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ---------------------------//
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';
import { StatusDirective } from './status.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, Table2Component,StatusDirective],
  exports: [TableComponent, Table2Component,StatusDirective]
})
export class TableModule { }
