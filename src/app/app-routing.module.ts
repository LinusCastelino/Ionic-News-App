import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-single', loadChildren: './news-single/news-single.module#NewsSinglePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
