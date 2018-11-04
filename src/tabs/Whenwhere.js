import React, {Component} from 'react'
import church from '../church.jpg';
import lokal from '../lokal.jpg';
import '../styles/App.css';

export default class Whenwhere extends Component {
/*
  constructor(props) {
    super(props);
  }
*/
  render(){
    return(
      <div className="tab">
        <h1>Vår bröllopsdag</h1>
        <h3>börjar med vigseln kl. 14.00 i slottskapellet i Kežmarok...</h3>
        <img src={church} className="kapell" alt="kapell"/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.218618007195!2d20.431034315413388!3d49.139473488828436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3dcd16839b75%3A0xfac8be68a1bba1ac!2zS2XFvm1hcnNrw70gaHJhZA!5e0!3m2!1scs!2sse!4v1541285684954"
        width="400" height="450"
        frameBorder="0"
        allowFullScreen
        title="maps-kapell"></iframe>
        <h3>...och fortsätter med en stor fest till morgondagen lite längre bort! Yeeey :D </h3>
        <img src={lokal} className="lokalen" alt="lokalen"/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.924683973154!2d20.430866253789475!3d49.145054391943425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3dcce4377367%3A0x4cf92f896d8dea29!2sVladim%C3%ADr+Vadel+VK+-+VADEL!5e0!3m2!1scs!2sse!4v1541286346533"
        width="80%"
        height="250"
        frameBorder="0"
        allowFullScreen
        title="maps-party"></iframe>
      </div>
    )
  }
}
