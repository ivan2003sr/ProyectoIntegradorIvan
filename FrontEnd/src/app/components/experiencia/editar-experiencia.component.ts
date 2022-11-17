import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImpExperienciaServiceService } from 'src/app/service/imp-experiencia-service.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  
  expLab : Experiencia = null;

  constructor(private impExperienciaServiceService: ImpExperienciaServiceService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.impExperienciaServiceService.detail(id).subscribe(
      data =>{
        this.expLab=data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.impExperienciaServiceService.update(id, this.expLab).subscribe(
      data => {
        alert("Experiencia actualizada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar esta experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
