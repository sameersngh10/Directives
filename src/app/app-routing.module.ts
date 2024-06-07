import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchDirComponent } from './switch-dir/switch-dir.component';
import { ForDirComponent } from './for-dir/for-dir.component';

const routes: Routes = [
  { path: '', redirectTo: 'directives', pathMatch: 'full' },
  { path: 'directives', component: DirectivesComponent },
  { path: 'switch', component: SwitchDirComponent },
  { path: 'for', component: ForDirComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
