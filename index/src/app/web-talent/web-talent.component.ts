import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-web-talent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-talent.component.html',
  styleUrl: './web-talent.component.css'
})
export class WebTalentComponent {
talent_people=[
  {img:'./assets/img/top_talents_hololive.png', img_logo:'./assets/img/top_logo_hololive.svg'},
  {img:'./assets/img/top_talents_hololive_id.png', img_logo:'./assets/img/top_logo_hololive_id.svg'},
  {img:'./assets/img/top_talents_hololive_en.png', img_logo:'./assets/img/top_logo_hololive_en.svg'},
  {img:'./assets/img/top_talents_devis.png', img_logo:'./assets/img/top_logo_devis.svg'},
]

}
