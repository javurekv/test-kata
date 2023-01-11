import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailedPageComponent } from './detailed-page/detailed-page.component';
import { RepoService } from './detailed-page/repo.service.';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    data: {
      showNavigationOnMobile: true
    },
  },
  {
    path: 'detailed-page/:id',
    component: DetailedPageComponent,
    data: {
      showNavigationOnMobile: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RepoService]
})
export class AppRoutingModule {

}
