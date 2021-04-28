import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
} )
export class LoginComponent implements OnInit {

  titre: string = "s'identifier";
  utilisateur: Utilisateur;


  constructor( private authService: AuthService,
    private router: Router ) { this.utilisateur = new Utilisateur(); }

  ngOnInit (): void {
    if ( this.authService.isAuthenticated() ) {
      swal.fire( 'Login', `Hola ${this.authService.utilisateur.username} Vous êtes déjà connecté!`, 'info' );
      this.router.navigate( ['/diplomesAdmin'] );
    }
  }

  public login (): void {
    if ( this.utilisateur.username == null || this.utilisateur.password == null ) {
      swal.fire( 'Error Login', 'Username ou password vides!', 'error' );
      return;
    }

    this.authService.login( this.utilisateur ).subscribe( response => {
      console.log( response );

      this.authService.enregistrerUtilisateur( response.access_token );
      this.authService.enregistrerToken( response.access_token );
      let utilisateur = this.authService.utilisateur;
      this.router.navigate( ['/diplomesAdmin'] );
      swal.fire( 'Login', `Salut ${utilisateur.username}, session réussir!`, 'success' );
    }, err => {
      if ( err.status == 400 ) {
        swal.fire( 'Error Login', 'Utilisateur ou mot de pass incorrectes!', 'error' );
      }
    }
    );

  }

}
