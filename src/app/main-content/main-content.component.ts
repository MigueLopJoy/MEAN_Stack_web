import { Component } from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CatalogComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
