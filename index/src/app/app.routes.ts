import { WebNewsComponent } from './web-news/web-news.component';
import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';

import path from 'path';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WebAboutComponent } from './web-about/web-about.component';


export const routes: Routes = [
 {path: '', component: HomeComponent },
 {path:'post/:id', component: PostComponent},
 {path:'app-web-about', component: WebAboutComponent}

 //{path:'', component: AppComponent}

];
