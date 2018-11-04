import React,  {Component} from 'react';
import CarTrip from './Car.js'
import FlightTrip from './Flight.js'

export default class How extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="how">
        <h1>Hur kommer jag dit?</h1>
        <p>
          Kežmarok är en väldigt mysig liten stad i norra Slovakien. Det finns många sätt att ta sig dit. Tyvärr finns det ingen
          självklar och enkel väg. Nedan finns exempel på resvägar både med bil
          samt flyg och buss/tåg.
        </p>
        <div className="icons"> 
          <i className="fas fa-car fa-4x"></i>eller
          <i className="fas fa-plane fa-4x"></i>
        </div>
        <CarTrip SelectedCarTrip={"germany"}/>
        <FlightTrip SelectedFlightTrip={"budapest"}/>
      </div>
    )
  }
}
