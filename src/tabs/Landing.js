import React, {Component} from 'react'
import flowers from '../Lager 2.png';

export default class Whenwhere extends Component {
    render(){
      return(
        <React.Fragment>
           <img src={flowers} className="flowers" alt="flowers"/>
            <div className="landing" >
                <h1>Anna och Robert</h1>
                <h2>8:e juni 2019</h2>
            </div>
        </React.Fragment>
      )
    }
  }
  