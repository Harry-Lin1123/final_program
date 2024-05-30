import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
   // 從路由參數中獲取文章的ID，使用問號將其標記為可選的
   postId?: number;
   // 假數據，代表部落格文章的內容
   post?: { id: number, title: string, content: string };
   constructor(private route: ActivatedRoute) { }
   ngOnInit(): void {
     // 從路由參數中獲取文章的ID
     this.route.params.subscribe(params => {
     this.postId = +params['id'];
     // 根據文章的ID查詢相應的文章數據，這裡假設有一個函數可以通過ID查詢文章
     this.post = this.getPostById(this.postId);
     });
     }
     // 根據文章ID查詢文章
     getPostById(id: number): { id: number, title: string, content: string } | undefined {
     // 在這裡實現根據文章ID查詢文章的邏輯，這裡使用假數據來模擬
     const posts = [
     { id: 1, title: 'Angular 入門指南1', content: '這是一個介紹 Angular 的入門指南。' },
     { id: 2, title: 'Angular Forms 教學', content: '這是一個關於 Angular 表單的教學。' },
     { id: 3, title: 'Angular Router 使用指南', content: '這是一個介紹 Angular 路由的使用指南。' },
     // 其他部落格文章
     ];
     return posts.find(post => post.id === id);
     }

}
