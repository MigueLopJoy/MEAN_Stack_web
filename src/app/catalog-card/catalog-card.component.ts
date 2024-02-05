import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  imports: [],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.css'
})
export class CatalogCardComponent {
  @Input() product: any
}
