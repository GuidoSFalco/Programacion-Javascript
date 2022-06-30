import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  constructor() {
  }

  public act1() {
    var numero:number = 50;


      $('#demo1').text(numero)
  }



  /**
   * name
   */
  public act2() {
    var x:number = 5
    var y:number = 10
    var z:number = x + y

    $('#demo2').text(z)
  }

  /**
   * act3
   */
  public act3() {
    var persona = {
      nombre: "Juan",
      apellido: "Perez",
      edad: "38"
    }

    $('#demo3').html(persona.nombre + " " + persona.apellido+ " tiene" +' '+ persona.edad)
;
  }

  ngOnInit(): void {
  }

}
