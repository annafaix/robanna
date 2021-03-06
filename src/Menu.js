import React, { Component } from 'react';
import './styles/App.css';

class Menu extends Component {
    render(){
        return(
            <header>
              <div className="hamburger-menu" onClick={()=> {this.props.toggle()}}>
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
