import { Component, OnInit } from '@angular/core';
import { cardmodel } from 'src/app/models/cardmodel';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


card: cardmodel= new cardmodel();
datacard: cardmodel[]= [
  {
    cardtitul :"Sol",
    descri: "descripcion",
    boton: "1",
    il: "https://www.lifeder.com/wp-content/uploads/2019/11/el-sol-NASA-estrellas-min.jpg"
  },
  {
    cardtitul :"Luna",
    descri: "descripcion2",
    boton: "2",
    il: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/280px-Full_Moon_Luc_Viatour.jpg"
  },
  {
    cardtitul :"Planeta",
    descri: "descripcion3",
    boton: "3",
    il: "https://cienciaybiologia.com/wp-content/uploads/2014/03/planeta-tierra.jpg"
  },
  {
    cardtitul :"Estrellas",
    descri: "descripcion4",
    boton: "4",
    il: "https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg"
  }
]

addcard(){
  console.log(this.card);
  this.datacard.push(this.card)
}
}

