import React, {Component} from 'react'
import '../styles/App.css';

export default class Register extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="tab">
        <h1>Jag vill anmäla mig!</h1>
        <p>
          Anmälan!
        </p>
      </div>
    )
  }
}
