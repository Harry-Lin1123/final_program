import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
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
