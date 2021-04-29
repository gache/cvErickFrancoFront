import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor( private http: HttpClient ) { }

  private _utilisateur: Utilisateur;
  private _token: string;

  public get utilisateur (): Utilisateur {
    if ( this._utilisateur != null ) {
      return this._utilisateur;
    } else if ( this._utilisateur == null && sessionStorage.getItem( 'utilisateur' ) != null ) {
      this._utilisateur = JSON.parse( sessionStorage.getItem( 'utilisateur' ) ) as Utilisateur;
      return this._utilisateur;
    }
    return new Utilisateur();
  }

  public get token (): string {
    if ( this._token != null ) {
      return this._token;
    } else if ( this._token == null && sessionStorage.getItem( 'token' ) != null ) {
      this._token = sessionStorage.getItem( 'token' );
      return this._token;
    }
    return null;
  }


  public login ( utilisateur: Utilisateur ): Observable<any> {
    const Url = 'http://localhost:8080/oauth/token';

    const acces = btoa( 'cverick' + ':' + '12345' );
    const httpHeaders = new HttpHeaders( {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + acces
    } );

    let params = new URLSearchParams();
    params.set( 'grant_type', 'password' );
    params.set( 'username', utilisateur.username );
    params.set( 'password', utilisateur.password );
    console.log( params.toString() );
    return this.http.post<any>( Url, params.toString(), { headers: httpHeaders } );
  }


  enregistrerUtilisateur ( accessToken: string ): void {
    let payload = this.avoirDonneeToken( accessToken );
    this._utilisateur = new Utilisateur();
    this._utilisateur.prenom = payload.prenom;
    this._utilisateur.nom = payload.nom;
    this._utilisateur.email = payload.email;
    this._utilisateur.username = payload.user_name;
    this._utilisateur.roles = payload.authorities;
    sessionStorage.setItem( 'utilisateur', JSON.stringify( this._utilisateur ) );
  }

  enregistrerToken ( accessToken: string ): void {
    this._token = accessToken;
    sessionStorage.setItem( 'token', accessToken );
  }



  avoirDonneeToken ( accessToken: string ): any {
    if ( accessToken != null ) {
      return JSON.parse( atob( accessToken.split( "." )[1] ) );
    }
    return null;
  }

  isAuthenticated (): boolean {
    let payload = this.avoirDonneeToken( this.token );
    if ( payload != null && payload.user_name && payload.user_name.length > 0 ) {
      return true;
    }
    return false;
  }

  hasRole ( role: string ): boolean {
    if ( this.utilisateur.roles.includes( role ) ) {
      return true;
    }
    return false;
  }

  logout (): void {
    this._token = null;
    this._utilisateur = null;
    // sessionStorage.clear();
    sessionStorage.removeItem( 'token' );
    sessionStorage.removeItem( 'utilisateur' );
  }



}
