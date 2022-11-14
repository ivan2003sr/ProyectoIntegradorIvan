import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImpExperienciaServiceService } from 'src/app/service/imp-experiencia-service.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor( private impExperienciaServiceService: ImpExperienciaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const exp = new Experiencia(this.nombreE, this.descripcionE);
    this.impExperienciaServiceService.save(exp).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Algo falló");
      this.router.navigate(['']);
    })
  }

}
