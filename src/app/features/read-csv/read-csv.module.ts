import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReadCsvComponent} from './read-csv.component';
import {ReadCsvRoutingModule} from "./read-csv-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";
import {CoreModule} from "../../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    ReadCsvComponent
  ],
  imports: [
    CommonModule,
    ReadCsvRoutingModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    NgbCollapse,
    CoreModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatSnackBarModule
  ]
})
export class ReadCsvModule {
}
