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
    this.toggle = this.toggle.bind(this);
    this.state = {
      choosenTab: "start",
      showMenu : false
    }
  }

  fadein(){
      // let fadingH1 = document.getElementsByTagName("h1")[0];
      // let fadingH2 = document.getElementsByTagName("h2")[0];
      // console.log(fadingH1, fadingH2)
      // fadingH1.className += "fade"
      // fadingH2.className += "fade"
  }
  toggle(){
    const hamMenu = document.querySelector(".hamburger-menu");
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const navItems = document.querySelectorAll('.nav-item')

    if(!this.state.showMenu){
        hamMenu.classList.add("close");
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        this.setState({showMenu: !this.state.showMenu})  
    }
    else{
        hamMenu.classList.remove("close");
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        this.setState({showMenu:false})
    } 
};
  changeTab = (tab)=> {
    this.setState({choosenTab: tab})
    this.toggle()
  }
    render() {
      let tab;
        if(this.state.choosenTab === "start"){
        tab = <Landing/>
        }else if(this.state.choosenTab === "about"){
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
      <Menu changeTab={this.changeTab} toggle={this.toggle} />
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
