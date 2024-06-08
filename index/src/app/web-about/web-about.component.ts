import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-web-about',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './web-about.component.html',
  styleUrl: './web-about.component.css'
})
export class WebAboutComponent {
  bg='../assets/img/about/head_bg.svg';
  intro_pc='../assets/img/about/hololive_infographic_pc.png';
  intro_sp='../assets/img/about/hololive_infographic_sp.png';
  slide1='../assets/img/about/slide1.png';
  slide2='../assets/img/about/slide2.png';
  slide3='../assets/img/about/slide3.png';
  slide4='../assets/img/about/slide4.png';
  slide5='../assets/img/about/slide5.png';
  slide6='../assets/img/about/slide6.png';
  slide7='../assets/img/about/slide7.png';
  slide8='../assets/img/about/slide8.png';


  title = 'ABOUT';
  subtitle = 'ホロライブプロダクションとは？';
  intro1 = '「ホロライブプロダクション」は、女性VTuberグループ「ホロライブ」、男性VTuberグループ「ホロスターズ」を擁するVTuber事務所です。現在、YouTube総チャンネル登録者は約8,000万人を超え、日本・インドネシア語圏・英語圏で80名以上のタレントが活動しています。';
  intro2 = '「ホロライブプロダクション」に所属するタレントは、カバー株式会社のVR/ARのテクノロジーを活用し、ゲーム実況や雑談などのライブ配信からリアル会場を使用してのライブ活動まで多様な価値体験を提供し、SNSを通じて世界中のファンやクリエイターと繋がる強固なコミュニティを形成しています。';
  specialty1 = '世界を巻き込むエンターテインメント';
  specialty2 = '';
  specialty3 = '';
}
