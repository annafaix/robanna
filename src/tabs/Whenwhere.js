import React, {Component} from 'react'
import church from '../church.jpg';
import lokal from '../lokal.jpg';
import '../styles/App.css';

export default class Whenwhere extends Component {
  render(){
    return(
      <React.Fragment>
        <div className="whenWhere">
        <h1>Vår bröllopsdag</h1>
          <h2>Vigseln</h2>
          <img src={church} alt="kapell"/>
          <p>Både vigsel och festen är i Kezmarok. </p>
          <h2>Fest!Yeeey</h2>
          <img src={lokal} alt="lokalen"/>
          <p>Både vigsel och festen är i Kezmarok. </p>
      </div>
      </React.Fragment>
    )
  }
}
