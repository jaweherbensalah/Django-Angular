import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  [x: string]: any;
  produits = [{nom: 'test', prix_unitaire:'t'}];
  selectedProduit;
  

  constructor(private api: ApiService) {
    this.getProduits();
    this.selectedProduit = { id : 0, nom: '' , prix_unitaire: 0, quantite: 0 };
  }
  getProduits = () => {
    this.api.getAllProduits().subscribe(
      data => {
        this.produits = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  produitClicked = (produit) => {
    this.api.getOneProduit(produit.id).subscribe(
      data => {
        this.selectedProduit = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateProduit = () => {
    this.api.updateProduit(this.selectedProduit).subscribe(
      data => {
        this.getProduits();
      },
      error => {
        console.log(error);
      }
    );
  }
  createProduit = () => {
    this.api.createProduit(this.selectedProduit).subscribe(
      data => {
        this.produits.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteProduit = () => {
    this.api.deleteProduit(this.selectedProduit.id).subscribe(
      data => {
        this.getProduits();
      },
      error => {
        console.log(error);
      }
    );
  }
}









