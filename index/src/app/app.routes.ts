import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';

import path from 'path';
import { AppComponent } from './app.component';


export const routes: Routes = [
 {path: '', component: HomeComponent },
 {path:'post/:id', component: PostComponent}
 //{path:'', component: AppComponent}

];
