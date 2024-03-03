import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'search', loadChildren : () => import('./search/search.module').then(m => m.SearchModule)},
  {path : 'sync', loadChildren : () => import('./sync/sync.module').then(m => m.SyncModule)},
  {path : '', redirectTo : 'compare', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
