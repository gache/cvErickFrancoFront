import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diplome } from 'src/app/models/diplome';
import { DiplomeService } from '../../../service/diplome.service';
import swal from 'sweetalert2';
import { AuthService } from 'src/app/utilisateur/auth.service';

@Component( {
  selector: 'app-creatediplome',
  templateUrl: './creatediplome.component.html',
  styleUrls: ['./creatediplome.component.css']
} )
export class CreatediplomeComponent implements OnInit {

  diplome: Diplome = new Diplome();
  title: string = "Créer un Dîplome";
  erreurs: string[];

  constructor( private diplomeService: DiplomeService,
    private router: Router,
    private activatedRoute: ActivatedRoute, public authService: AuthService ) { }

  ngOnInit (): void {
    this.diplomeById();
  }

  diplomeById (): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id'];

      if ( id ) {
        this.diplomeService.getDiplome( id ).subscribe( ( diplome ) => this.diplome = diplome );
      }

    } )
  }

  public create (): void {
    console.log( this.diplome );

    this.diplomeService.create( this.diplome ).subscribe(
      respon => {
        this.router.navigate( ['/diplomesAdmin'] )
        swal.fire( 'Nouveau Dîplome', `Dîplome ${this.diplome.nomDiplome} a été créer avec satisfaction`, 'success' )
      },
      err => {
        this.erreurs = err.error.errors as string[];
        console.error( "code de l'erreur depuis le back:" + err.status );
        console.error( err.error.errors );
      } );
  }


  public update (): void {
    console.log( this.diplome );
    this.diplomeService.update( this.diplome ).subscribe(
      resp => {
        this.router.navigate( ['/diplomesAdmin'] );
        swal.fire( 'Dîplome actualiser', `Dîplome ${this.diplome.nomDiplome} a été actualiser avec satisfaction`, 'success' )
      },
      err => {
        this.erreurs = err.error.errors as string[];
        console.error( "code de l'erreur depuis le back:" + err.status );
        console.error( err.error.errors );

      }
    )
  }

}
