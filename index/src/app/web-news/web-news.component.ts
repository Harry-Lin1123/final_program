import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-news',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './web-news.component.html',
  styleUrl: './web-news.component.css'
})
export class WebNewsComponent {
  title = 'NEWS';
  subtitle = 'ニュース';
  news=[
  {id:1,img:'./assets/img/20240606_main.png', date:'2024.06.06',title:'「ホロライブ」初の本格エンタメ参考書、『ホロライブ学力診断　中学5教科』発売決定！',txt:'カバー株式会社（本\n社：港区、代表取締役社長：谷郷元昭）は、弊社が運営する「ホロライブプロダクション」傘下の女性VTuberグループ「ホロライブ」において、株式会社Gakken より、初のエンタメ参考書『ホロライブ学力診断　中学5教科』の発売が決定したことをお知らせいたします。 Gakkenとホロライブ初のコラボ書籍となる、エンタメ参考書『ホロライブ学力診断　中学5教科』の発売が「7月25日（木）」'},
  {id:2,img:'./assets/img/20240601_main.png', date:'2024.06.01',title:'世界初！VTuberと「ロサンゼルス・ドジャース」とのコラボが決定。 「ホロライブプロダクション」とのコラボレーション企画「hololive night」解禁！',txt:'カバー株式会社（本社：東京都港区、代表取締役：谷郷元昭）は、MLBチーム「ロサンゼルス・ドジャース」との初のコラボレーション企画を、現地時間2024年7月5日（金）午後7時10分に開催する事をお知らせいたします。 「ホロライブプロダクション」と「ロサンゼルス・ドジャース」の初コラボレーション企画を現地時間7月5日（金）19時10分より開催いたします。 試合当日は「星街すいせい」「兎田ぺこら」「がう'},
  {id:3,img:'./assets/img/20240528_main.jpg', date:'2024.05.28',title:'「ホロライブEnglish」所属「森カリオペ」 x SuperGroupiesコラボコレクションが発売',txt:'カバー株式会社（本社：東京都港区、代表取締役社⻑：⾕郷元昭）は、弊社が運営するVTuberグループ「ホロライブEnglish」所属VTuber「森カリオペ」と、株式会社アニウェア（本社：東京都渋谷区、代表取締役社長 安田勝己）とのコラボコレクション発売を発表いたします。 本コラボコレクションでは、「ホロライブEnglish」所属VTuber「森カリオペ」をイメージしデザインされたアイテムを販売いた'},
  {id:4,img:'./assets/img/20240527_main.png', date:'2024.05.27',title:'英語圏向けVTuberグループ「ホロスターズEnglish -TEMPUS- 」4名の3Dお披露目配信が決定！2024年6月2日（日）より順次実施！',txt:'カバー株式会社（本社：東京都港区、代表取締役社長：谷郷元昭）は、弊社が運営する「ホロライブプロダクション」傘下の英語圏で活動中のVTuberグループ「ホロスターズEnglish -TEMPUS-」において、同グループ所属の「ガビス・ベッテル」、「マキナ・Ｘ・フレオン」、「万象院ハッカ」、「定水寺シンリ」の3Dモデルお披露目配信が決定したことをお知らせいたします。 お披露目配信は、各タレントのYou'},
  {id:5,img:'./assets/img/20240524_main.png', date:'2024.05.24',title:'「holo Indie」を運営する株式会社シー・シー・エム・シーが公式HPとSNSを開設。併せて新作２タイトルをリリース',txt:'カバー株式会社（本社：東京都港区、代表取締役社長：谷郷元昭）は、⼦会社である「株式会社シー・シー・エム・シー」（以下"CCMC"）が公式サイト及び、同社が運営するホロライブプロダクションの二次創作ゲームブランド「holo Indle」の公式SNSを開設しました。また「holo Indie」6月の新規リリースタイトルも併せて発表いたします。 株式会社CCMC公式サイトを開設 Creator Comm'},
  ]
}
