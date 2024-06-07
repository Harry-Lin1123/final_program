import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  news=[
    {img:'./assets/img/20240606_main.png', date:'2024.06.06',text:'「ホロライブ」初の本格エンタメ参考書、『ホロライブ学力診断　中学5教科』発売決定！'},
    {img:'./assets/img/20240601_main.png', date:'2024.06.01',text:'世界初！VTuberと「ロサンゼルス・ドジャース」とのコラボが決定。 「ホロライブプロダクション」とのコラボレーション企画「hololive night」解禁！'},
    {img:'./assets/img/20240528_main.jpg', date:'2024.05.28',text:'「ホロライブEnglish」所属「森カリオペ」 x SuperGroupiesコラボコレクションが発売'},
    {img:'./assets/img/20240527_main.png', date:'2024.05.27',text:'英語圏向けVTuberグループ「ホロスターズEnglish -TEMPUS- 」4名の3Dお披露目配信が決定！2024年6月2日（日）より順次実施！'},
    {img:'./assets/img/20240524_main.png', date:'2024.05.24',text:'「holo Indie」を運営する株式会社シー・シー・エム・シーが公式HPとSNSを開設。併せて新作２タイトルをリリース'},
    {img:'./assets/img/20240516_main.png', date:'2024.05.16',text:'「ホロライブ」発メディアミックスプロジェクト「魔法少女ホロウィッチ！」が始動！メインPV&キービジュアルなど一挙公開！'},
    {img:'./assets/img/20240508_main.jpg', date:'2024.05.08',text:'「ホロライブEnglish」所属「ワトソン・アメリア」 x SuperGroupiesコラボコレクションが発売'},
    {img:'./assets/img/20240323_main.png', date:'2024.03.23',text:'台湾にてホロライブプロダクション x CAPSULE Cheer UP Runイベントおよびコラボカフェの開催が決定'},
  ]
}
