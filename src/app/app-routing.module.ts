import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const newLocal = '';
const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) 
  },
  {
    path: 'stores',
    loadChildren: () => import('./pages/stores/stores.module').then(m => m.StoresModule) 
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) 
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  { 
    path: 'signup', 
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
  },
  { 
    path: 'add-product', 
    loadChildren: () => import('./pages/add-product/add-product.module').then(m => m.AddProductModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'product-list', 
    loadChildren: () => import('./pages/product-list/product-list.module').then(m => m.ProductListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/not-found'

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
