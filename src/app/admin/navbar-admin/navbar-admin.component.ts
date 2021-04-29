import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/utilisateur/auth.service';
import swal from 'sweetalert2';
@Component( {
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
} )
export class NavbarAdminComponent implements OnInit {

  title: string = "Erick Franco Admin";

  constructor( public authService: AuthService, private router: Router ) { }

  ngOnInit (): void {
  }

  logout (): void {
    let username = this.authService.utilisateur.username;
    this.authService.logout();
    swal.fire( 'Logout', `Salut ${username}, Vous avez réussi à fermer la session!`, 'success' );
    this.router.navigate( ['/login'] );
  }

}
