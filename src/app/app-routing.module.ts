import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlticciCardComponent } from './component/alticci-card/alticci-card.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: AlticciCardComponent
    },
    {
      path: 'alticci-sequence',
      component: AlticciCardComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
