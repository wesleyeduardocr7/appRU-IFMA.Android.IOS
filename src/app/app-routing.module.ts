import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },  
  { 
    path: 'login', 
    loadChildren: './pages/login/login.module#LoginPageModule' 
  },
  { 
    path: 'administrador', 
    loadChildren: './pages/administrador/administrador.module#AdministradorPageModule' 
  },
  { 
    path: 'details/:id', 
    loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' 
  },
  { 
    path: 'details', 
    loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' 
  },
  { 
    path: 'updatejanta/:id', 
    loadChildren: './pages/updatejanta/updatejanta.module#UpdatejantaPageModule'
  },
  { 
    path: 'updatejanta', 
    loadChildren: './pages/updatejanta/updatejanta.module#UpdatejantaPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
