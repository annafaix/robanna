import React, { Component } from 'react';
import landImg from './wedding_picture.jpg';
import flowers from './Lager 2.png';
import './App.css';
import Menu from "./Menu.js"
import Where from "./Where.js"
import { Button, Divider, Form, TextArea } from 'semantic-ui-react'



class App extends Component {
  constructor(props){
    super(props);
    this.fadein = this.fadein.bind(this);
  }

  fadein(){
      let fading = document.getElementsByClassName("landing")[0];
      fading.className += " fade"
  }
  render() {
    return (
    <div className="body">
      <Menu />
      <main>
        <div className="landing" onLoad={this.fadein}>
          <img src={flowers} className="flowers" alt="flowers"/>
          <h1>Anna och Robert</h1>
          <h2>8:e juni 2019</h2>
          <i className="angle down icon"></i>
        </div>
        <h1>Vi ska gifta oss!</h1>
        <div className="beginning bigImg">
        <h2>Vi ska gifta oss!</h2>
        <div className="container">
        <div className="main-image">
        <img src={landImg} alt="wedding_picture"/>
        </div>
        </div>
        <h2>Hur allt började</h2>
        <p>
        Anna plugade svenska, teater i Sverige, couchsurfing, resa till Brno, Kroatien tillsammans, Budapest,  första träffen med föräldrar, Rysy, jul i Kezmarok, eurotrip, flytt till Sverige, Robert har börjat lära sig slovakiska</p>
        </div>

        <div className="register">
        <h2>Jag vill anmäla mig!</h2>
        <p>Skriv i meddelandet eventuella allergier samt namn på alla i ert sällskap/familj som kommer</p>
        <Form size="large">
         <Form.Group inline>
           <Form.Field label='Ditt namn' control='input' placeholder='' required />
           <Form.Field  label='Email' control='input' placeholder='@'  required />
          </Form.Group>
          <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Medelande'/>
            <Button type='submit'>Submit</Button>
            <Divider />
          </Form>
        </div>
        <Where/>
      </main>
      <footer>
      Made by Robert & Anna with lots of <i className="fas fa-heart"></i>
      </footer>
    </div>

    );
  }
}

export default App;
