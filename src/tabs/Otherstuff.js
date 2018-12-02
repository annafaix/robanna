import React, {Component} from 'react'
import '../styles/App.css';

export default class Otherstuff extends Component {
/*
  constructor(props) {
    super(props);
  }
*/
  render(){
    return(
      <div className="tab">
        <h1>Mer att göra!</h1>
        <p>
          Det finns så mycket mer att göra runt om Kežmarok.
          För de som älskar natur och vandring är det "obligatoriskt" att besöka Vysoké Tatry. En dags vandring till en av många bergstugor kräver inte mycket fysisk kondition men bjuder på fantastiskt vackra utsikter. 
        </p>
        <p> Gillar man slott och historia är man på rätt plats.Spis castle mm.</p>
        <p>Om man har dansat hela natten på bröllopet vill man kanske ta det lite lugnare. Varför inte vila i 35 grader varma utepooler, i olika bastu eller ta en drink i innepoolen? <br/>Vi rekomenderar att besöka <a href="https://www.aquacity.sk/en/"> AquaCity i Poprad </a>
        </p>
        <p>Slovakien</p>
        <a href="https://edition.cnn.com/travel/article/slovakia-best-places/index.html">Vad rekomenderar CNN travel i Slovakien</a>
      </div>
    )
  }
}
