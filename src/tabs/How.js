import React,  {Component} from 'react';
import CarTrip from './Car.js'
import FlightTrip from './Flight.js'

export default class How extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <h2>Hur kommer jag till Kezmarok, Slovakien?</h2>
        <p>
          Det finns många sätt att ta sig till Kezmarok. Tyvärr finns det ingen
          självklar och enkel väg. Nedan finns exempel på resvägar både med bil
          samt flyg och buss/tåg.
        </p>

        <CarTrip SelectedCarTrip={"germany"}/>
        <FlightTrip SelectedFlightTrip={"budapest"}/>

      </div>
    )
  }
}
