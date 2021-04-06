import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  annee: number;
  constructor() {
    // Function pour avoir l'année de manière automatique
    this.annee = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
