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

}
