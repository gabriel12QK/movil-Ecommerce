import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
   //tabs.page.tsredirectTo:'home',
    component: TabsPage,
    children:[
      
        {
          path:'home',
          loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
        },
        {
          path: 'search',
          loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
        },
        {
          path: 'carrito',
          loadChildren: () => import('../carrito/carrito.module').then( m => m.CarritoPageModule)
        },      
        {
          path:'',
         redirectTo:'home',
         pathMatch:'full'
        },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
