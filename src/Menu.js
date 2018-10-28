import React, { Component } from 'react';
import './App.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu : false,
    }
     this.toggle = this.toggle.bind(this);

   }

    toggle(){
      const hamMenu = document.querySelector(".hamburger-menu");
      const menuDiv = document.querySelectorAll(".menu-item");
      const menu = document.querySelector('.menu');
      const menuNav = document.querySelector('.menu-nav');
      const navItems = document.querySelectorAll('.nav-item')
    if(!this.state.showMenu){
      hamMenu.classList.add("close");
      menu.classList.add('show');
      menuNav.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));
      this.setState({showMenu:true})

    }else{
      console.log("closed");
      hamMenu.classList.remove("close");
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
      this.setState({showMenu:false})
    }
  };

  render(){
    return(
      <header>
       <div className="hamburger-menu" onClick={this.toggle}>
         <div className="menu-item"></div>
         <div className="menu-item"></div>
         <div className="menu-item"></div>
       </div>
     <nav className="menu">
       <ul className="menu-nav">
         <li className="nav-item">
           <a href="index.html" className="nav-link">
             Hem
           </a>
         </li>
         <li className="nav-item">
           <a href="about.html" className="nav-link">
             Vår resa
           </a>
         </li>
         <li className="nav-item">
           <a href="where.html" className="nav-link">
             När och var
           </a>
         </li>
       </ul>
     </nav>
    </header>
    )
  }
}

export default Menu;
