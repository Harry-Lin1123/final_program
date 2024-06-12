import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PostComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'index';
  twitter_link='https://twitter.com/intent/tweet?text=ホロライブプロダクション / @hololivetv より &amp;url=https://hololivepro.com/&amp;hashtags=%E3%83%9B%E3%83%AD%E3%83%A9%E3%82%A4%E3%83%96%E3%83%97%E3%83%AD%E3%83%80%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3';
  twitter_img='https://hololivepro.com/wp-content/themes/hololive_production/images/common_icon_x_jp.svg';

  icons=[{link:'https://social-plugins.line.me/lineit/share?url=https://hololivepro.com',
    img:'https://hololivepro.com/wp-content/themes/hololive_production/images/common_icon_line.svg'
  },{link:'https://www.reddit.com/submit?url=https://hololivepro.com',
    img:'https://hololivepro.com/wp-content/themes/hololive_production/images/common_icon_reddit.svg'
  },{link:'http://www.facebook.com/share.php?u=https://hololivepro.com',
    img:'https://hololivepro.com/wp-content/themes/hololive_production/images/common_icon_facebook.svg'
  }]

    nav_menu1='assets/img/nav_menu/nav_menu1.png';


    nav1=[{link:'ABOUT'},
      {link:'TALENT'},
      {link:'NEWS'},
      {link:'AUDITION'},
    ]
    nav2=[{link:'COLLABORATION'},
      {link:'OFFICIAL SHOP'},
      {link:'HOLODULE'},
    ]
    nav3=[{link:'会社概要'},
      {link:'プライバシーポリシー'},
      {link:'未成年の方々へのお願い'},
      {link:'よくある質問'},
      {link:'サポーターガイドライン'},
    ]

}
