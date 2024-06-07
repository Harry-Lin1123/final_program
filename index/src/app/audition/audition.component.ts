import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-audition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audition.component.html',
  styleUrl: './audition.component.css'
})
export class AuditionComponent {
btn=[{id:'Japanese Talent',img:'https://hololivepro.com/wp-content/themes/hololive_production/images/common_icon_btn_link_bl.svg'},
  {id:'Indonesia Talent',img:'https://hololivepro.com/wp-content/themes/hololive_production/images/common_icon_btn_link_bl.svg'},
  {id:'English Talent',img:'https://hololivepro.com/wp-content/themes/hololive_production/images/common_icon_btn_link_bl.svg'},
]
}
