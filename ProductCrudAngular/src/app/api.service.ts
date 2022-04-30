import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllProduits(): Observable<any> {
    return this.http.get(this.baseurl + '/produits/',
    {headers: this.httpHeaders});
  }
  getOneProduit(id): Observable<any> {
    return this.http.get(this.baseurl + '/produits/' + id + '/',
    {headers: this.httpHeaders});
  }
  updateProduit(produit): Observable<any> {
    const body = {nom: produit.nom , prix_unitaire: produit.prix_unitaire, quantite: produit.quantite };
    return this.http.put(this.baseurl + '/produits/' + produit.id + '/', body,
    {headers: this.httpHeaders});
  }
  createProduit(produit): Observable<any> {
    const body = {nom: produit.nom , prix_unitaire: produit.prix_unitaire, quantite: produit.quantite };
    return this.http.post(this.baseurl + '/produits/', body,
    {headers: this.httpHeaders});
  }
  deleteProduit(id): Observable<any> {
    return this.http.delete(this.baseurl + '/produits/' + id + '/',
    {headers: this.httpHeaders});
  }
}