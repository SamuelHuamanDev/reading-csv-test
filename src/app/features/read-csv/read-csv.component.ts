import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ReadCsvService} from "../../core/read-csv.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatSnackBar} from "@angular/material/snack-bar";

export interface Result {
  id: string,
  value: string
}

@Component({
  selector: 'app-read-csv',
  templateUrl: './read-csv.component.html',
  styleUrls: ['./read-csv.component.scss']
})
export class ReadCsvComponent implements OnInit, AfterViewInit {

  form!: FormGroup

  displayedColumns = ['id', 'value']
  dataSource = new MatTableDataSource<Result>()
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  isResultCollapsed = true
  showLoading = false

  constructor(private service: ReadCsvService, private fb: FormBuilder, private _snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      url: new FormControl("", [
        Validators.required
      ])
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  getData() {
    if (this.form.valid) {
      this.showLoading = true
      this.dataSource.data = []
      const currentUrl = this.form.get("url")?.value as string
      this.service.getInfo(currentUrl)
        .subscribe({
          next: (data) => {
            const list = data.split('\n')
              .filter(value => value.trim() != "")
              .map((value: string, index: number) => {
                return {id: (index + 1).toString(), value: value} as Result
              })
            this.dataSource.data = list
            this.isResultCollapsed = list.length == 0
          },
          error: (error) => {
            console.error(error)
            this.showError("(" + error.status.toString() + " " + error.statusText + "): " + error.url)
            this.showLoading = false
          },
          complete: () => {
            this.showLoading = false
          }
        })
    }
  }

  showError(errorMessage: string) {
    this._snackbar.open(errorMessage, "Cerrar", {
      duration: 8000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

}
