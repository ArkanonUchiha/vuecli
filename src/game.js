function Jugador(nombre) {
  this.nombre = nombre;
  this.pv = 200;
  this.mana = 280;

  this.curar = function(objetivo) {
    if(this.mana >= 40) {
      // objetivo.pv = objetivo.pv + 20;
      objetivo.pv += 20;
      this.mana -= 40;
    } else {
      console.log(this.nombre + " no tiene mana");
    }
    this.estado(objetivo);
  };

  this.atacar = function(objetivo) {
    if(objetivo.pv > 40){
      objetivo.pv -= 40;
    } else {
      objetivo.pv = 0;
      console.log(objetivo.nombre + " ha muerto");
    }
    this.estado(objetivo);
  };


  this.enredadera = function(objetivo) {
    if(this.mana >= 30){
      this.mana -= 50;

      if(objetivo.pv >= 100) {
        objetivo.pv -= 100;
      }
      else {
        objetivo.pv = 0;
        console.log(objetivo.nombre + " Ha muerto");
      }

    } else {
      // objetivo.pv = 0;
      // console.log(objetivo.nombre + " Ha muerto");
      console.log(this.nombre + " no tiene mana insuficiente");
    }
    this.estado(objetivo);
  };



  this.estado = function(objetivo) {
    console.log(this);
    console.log(objetivo);
  };

}

export { Jugador }
