import React, { Component } from 'react';
import './styles/App.css';

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
        const menu = document.querySelector('.menu');
        const menuNav = document.querySelector('.menu-nav');
        const navItems = document.querySelectorAll('.nav-item')

        if(!this.state.showMenu){
            hamMenu.classList.add("close");
            menu.classList.add('show');
            menuNav.classList.add('show');
            navItems.forEach(item => item.classList.add('show'));
            this.setState({showMenu:true})
        }
        else{
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
                    <li className="nav-item" onClick={()=> {this.props.changeTab("start")}}>Start</li>
                    <li className="nav-item" onClick={()=> {this.props.changeTab("about")}}>Om oss</li>
                    <li className="nav-item" onClick={()=> {this.props.changeTab("whenwhere")}}>Var & När?</li>
                    <li className="nav-item" onClick={()=> {this.props.changeTab("how")}}>Reseförslag</li>
                    <li className="nav-item" onClick={()=> {window.open("register.html","demo","width=550,height=450,left=150,top=200,toolbar=0, titlebar=0,status=0,");}}>Anmälan</li>
                    <li className="nav-item" onClick={()=> {this.props.changeTab("slovak")}}>Hej & Ahoj!</li>
                    <li className="nav-item" onClick={()=> {this.props.changeTab("otherstuff")}}>Mer att göra</li>
                </ul>
              </nav>
            </header>
        )
    }
}

export default Menu;
