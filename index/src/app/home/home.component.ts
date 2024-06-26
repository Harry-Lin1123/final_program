import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { WebAboutComponent } from '../web-about/web-about.component';
import { WebTalentComponent } from '../web-talent/web-talent.component';
import { WebNewsComponent } from '../web-news/web-news.component';
import { AboutComponent } from '../about/about.component';
import { TalentComponent } from '../talent/talent.component';
import { NewsComponent } from '../news/news.component';
import { AuditionComponent } from '../audition/audition.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule,PostComponent,WebAboutComponent,WebTalentComponent,
    WebNewsComponent,AboutComponent,TalentComponent,NewsComponent,AuditionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  blogPosts = [
   { id: 1, title: '1：Angular 入門指南'},
   { id: 2, title: '2：Angular Forms 教學' },
   { id: 3, title: '3：Angular Router 使用指南'},
  ];

}
