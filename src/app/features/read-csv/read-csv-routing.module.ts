import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ReadCsvComponent} from "./read-csv.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'read-csv',
    pathMatch: 'full'
  },
  {
    path: 'read-csv',
    component: ReadCsvComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadCsvRoutingModule {
}
