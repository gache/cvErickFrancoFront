import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Diplome, IDiplome } from '../models/diplome';
import { catchError, map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class DiplomeService {

  constructor( private Http: HttpClient, private router: Router ) { }

  private url = "http://localhost:8080/api/diplomes";


  // methode pour avoir la liste de diplome
  public getAllDiplome (): Observable<IDiplome[]> {
    return this.Http.get<IDiplome[]>( this.url );
  }

  // methode pour créer un diplome
  public create ( diplome: Diplome ): Observable<Diplome> {
    return this.Http.post( this.url, diplome ).pipe(
      map( ( response: any ) => response.diplome as Diplome ),
      catchError( e => {
        if ( e.status == 400 ) {
          return throwError( e );
        }
        if ( e.error.message ) {
          console.error( e.error.message );
        }
        return throwError( e );
      } ) );
  }

  // methode pour avoir un dîplome avec un id 

  public getDiplome ( id ): Observable<Diplome> {
    return this.Http.get<Diplome>( `${this.url}/${id}` ).pipe(
      catchError( e => {
        if ( e.status != 401 && e.error.message ) {
          this.router.navigate( ['/diplomesAdmin'] );
        }
        return throwError( e );
      } ) );
  }

  public update ( diplome: Diplome ): Observable<any> {
    return this.Http.put<any>( `${this.url}/${diplome.id}`, diplome ).pipe(
      catchError( e => {
        if ( e.status == 400 ) {
          return throwError( e );
        }
        if ( e.error.message ) {
          console.error( e.errors.message );
        }
        return throwError( e );
      } )
    );
  }






}
