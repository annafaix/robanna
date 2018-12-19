import React, {Component} from 'react'
import church from '../assets/church.jpg';
import slott from '../assets/hrad.jpg'
import lokal from '../assets/lokal.jpg';
import '../styles/App.css';

export default class Whenwhere extends Component {
  render(){
    return(
      <div className="tab">
        <h1>Vår bröllopsdag</h1>
        <h2>Vigsel</h2>
        <p>
        Klockan 15.00 börjar vigseln i slottskapellet i Kežmarok.<br/>
        </p>
        <img src={church} className="kapell" alt="kapell"/>
        <img src={slott} className="slott" alt="slott"/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.218618007195!2d20.431034315413388!3d49.139473488828436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3dcd16839b75%3A0xfac8be68a1bba1ac!2zS2XFvm1hcnNrw70gaHJhZA!5e0!3m2!1scs!2sse!4v1541285684954"
        width="90%" height="350"
        frameBorder="1px"
        allowFullScreen
        title="maps-kapell"></iframe>
        <h2>Fest!</h2>
        <p>
        Efter vigsel kommer det bli fest i en lokal som ligger väldigt nära kapellet. Det kommer finnas buss som kör dem som vill. Festen kommer fortsätta till morgondagen! Yeeey :D </p>
        <img src={lokal} className="lokalen" alt="lokalen"/>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.872008929078!2d20.42873121568457!3d49.146054479316696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3dcce4377367%3A0x4cf92f896d8dea29!2sVladim%C3%ADr+Vadel+VK+-+VADEL!5e0!3m2!1ssk!2sse!4v1542743438929"
        width="90%"
        height="350"
        frameBorder="1"
        allowFullScreen
        title="maps-party"></iframe>
       
      </div>
    )
  }
}
