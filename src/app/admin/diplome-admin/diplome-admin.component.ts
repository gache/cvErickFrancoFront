import { Component, OnInit } from '@angular/core';
import { IDiplome } from 'src/app/models/diplome';
import { DiplomeService } from 'src/app/service/diplome.service';
import { AuthService } from 'src/app/utilisateur/auth.service';

@Component( {
  selector: 'app-diplome-admin',
  templateUrl: './diplome-admin.component.html',
  styleUrls: ['./diplome-admin.component.css']
} )
export class DiplomeAdminComponent implements OnInit {
  listDiplomes: IDiplome[];
  constructor( private diplomeService: DiplomeService, public authService: AuthService ) { }

  ngOnInit (): void {
    this.diplomeService.getAllDiplome().subscribe( resp => {
      this.listDiplomes = resp;
      // console.log( this.listDiplomes );
    } );
  }

}
