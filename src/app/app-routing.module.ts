import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'add-dragon',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/add-dragon/add-dragon.module').then(
        (m) => m.AddDragonModule
      ),
  },
  {
    path: 'details-dragon/:id',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/details-dragon/details-dragon.module').then(
        (m) => m.DetailsDragonModule
      ),
  },
  {
    path: 'about',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
