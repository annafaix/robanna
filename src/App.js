import React, { Component } from 'react';

import './styles/App.css';
import './styles/Menu.css';
import Menu from "./Menu.js"
import About from "./tabs/About.js"
import Whenwhere from "./tabs/Whenwhere.js"
import How from "./tabs/How.js"
import Register from "./tabs/Register.js"
import Slovak from "./tabs/Slovak.js"
import Otherstuff from "./tabs/Otherstuff.js"
import Landing from "./tabs/Landing.js"

class App extends Component {
  constructor(props){
    super(props);
    this.fadein = this.fadein.bind(this);  
    this.state = {
      choosenTab: "start"     
    }
  }

  fadein(){
      // let fadingH1 = document.getElementsByTagName("h1")[0];
      // let fadingH2 = document.getElementsByTagName("h2")[0];
      // console.log(fadingH1, fadingH2)
      // fadingH1.className += "fade"
      // fadingH2.className += "fade"
  }
  changeTab = (tab)=> {
    this.setState({choosenTab: tab})
  }
    render() {

    let tab = <Landing/>;
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
    <div className="body" onLoad={()=>{this.fadein()}}>
      <Menu changeTab={this.changeTab}/>
      <main>
        {tab}
      </main>
      <footer>
        Made by Robert & Anna <br/>with lots of <i className="fas fa-heart"></i>
      </footer>
    </div>

    );
  }
}

export default App;
