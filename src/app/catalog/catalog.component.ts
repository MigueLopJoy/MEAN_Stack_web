import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { CatalogCardComponent } from '../catalog-card/catalog-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CatalogCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
    products: any[] = []

    constructor(private catalogService: CatalogService) {}

    ngOnInit(): void {
        this.catalogService.getProducts().subscribe(
          (products: any[]) => {
            this.products = products
        })
    }
}