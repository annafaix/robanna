import React,  {Component} from 'react';
import CarTrip from './Car.js'
import FlightTrip from './Flight.js'
import '../styles/App.css';

export default class How extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripMethod: ""
    }
    this.changeMethod = this.changeMethod.bind(this);
  }

  changeMethod(method){
    this.setState({tripMethod: method})
  }

  render(){
    let method = null

    if(this.state.tripMethod === "car"){
      method = <CarTrip SelectedCarTrip={"germany"}/>
    }else if(this.state.tripMethod === "flight"){
      method = <FlightTrip SelectedFlightTrip={"budapest"}/>
    }else {
      method = null
    }

    return(
      <div className="tab">
        <h1>Hur kommer jag dit?</h1>
        <p>
          Kežmarok är en väldigt mysig liten stad i norra Slovakien. Det finns många sätt att ta sig dit. Tyvärr finns det ingen
          självklar och enkel väg. Välj mellan exempel på resvägar både med bil eller flyg och buss/tåg.
        </p>
        <div className="icons">
          <button onClick={()=>this.changeMethod("car")}>Bil</button>
          <button onClick={()=>this.changeMethod("flight")}>Flyg</button>
        </div>
        {method}
      </div>
    )
  }
}
