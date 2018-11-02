import React, { Component } from 'react';
import landImg from './wedding_picture.jpg';
import flowers from './Lager 2.png';
import './App.css';
import Menu from "./Menu.js"
import About from "./tabs/About.js"
import Whenwhere from "./tabs/Whenwhere.js"
import How from "./tabs/How.js"
import Register from "./tabs/Register.js"
import Slovak from "./tabs/Slovak.js"
import Otherstuff from "./tabs/Otherstuff.js"

class App extends Component {
  constructor(props){
    super(props);
    this.fadein = this.fadein.bind(this);
    this.state = {
      choosenTab: ""
    }
  }

  fadein(){
      let fading = document.getElementsByClassName("landing")[0];
      fading.className += " fade"
  }
  changeTab = (tab)=> {
    console.log(tab);
    this.setState({choosenTab: tab})
  }
    render() {

    let tab = null;
    if(this.state.choosenTab === "about"){
      tab = <About/>
    }else if(this.state.choosenTab === "whenwhere"){
      tab =  <Whenwhere/>
    }else if(this.state.choosenTab === "how"){
      tab =  <How/>
    }else if(this.state.choosenTab === "register"){
      tab =  <Register/>
    }else if(this.state.choosenTab === "slovak"){
      tab =  <Slovak/>
    }else if(this.state.choosenTab === "otherstuff"){
      tab =  <Otherstuff/>
    }

    return (
    <div className="body">
      <Menu changeTab={this.changeTab}/>
      <main>
        <div className="landing" onLoad={this.fadein}>
          <img src={flowers} className="flowers" alt="flowers"/>
          <h1>Anna och Robert</h1>
          <h2>8:e juni 2019</h2>
          <i className="angle down icon"></i>
        </div>
        <h1>Vi ska gifta oss!</h1>
        {tab}

      </main>
      <footer>
      Made by Robert & Anna with lots of <i className="fas fa-heart"></i>
      </footer>
    </div>

    );
  }
}

export default App;
