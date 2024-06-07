import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';

import path from 'path';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WebAboutComponent } from './web-about/web-about.component';
import { WebTalentComponent } from './web-talent/web-talent.component';
import { WebNewsComponent } from './web-news/web-news.component';


export const routes: Routes = [
 {path: '', component: HomeComponent },
 {path:'post/:id', component: PostComponent},
 {path:'about', component: WebAboutComponent},
 {path:'talent', component: WebTalentComponent},
 {path:'news', component: WebNewsComponent}

 //{path:'', component: AppComponent}

];
