import React, { Component } from 'react';
import Img1 from "../img1.jpg"
import Img2 from "../img2.jpg"
import Img3 from "../img3.jpg"
import Img4 from "../img4.jpg"
import Img5 from "../img5.jpg"

export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state={
            current: Img1
        }
    };

    changeImg = (img) => {
        this.setState({current: img })
        var currentImg = document.querySelector("#current-img");
        currentImg.classList.add("fade-in")
        setTimeout(()=> currentImg.classList.remove("fade-in"), 500)
    }
    render(){
        return(
            <div className="container">
                <div className="main-img">
                    <img src={this.state.current} id="current-img" alt="big"/>
                </div>
                <div className="imgs">
                    <img src={Img1} alt="img1" onClick={()=>{this.changeImg(Img1)}}/>
                    <img src={Img2} alt="img2" onClick={()=>{this.changeImg(Img2)}}/>
                    <img src={Img3} alt="img3" onClick={()=>{this.changeImg(Img3)}}/>
                    <img src={Img4} alt="img4" onClick={()=>{this.changeImg(Img4)}}/>
                    <img src={Img5} alt="img5" onClick={()=>{this.changeImg(Img5)}}/>
                </div>
            </div>
        )
    }
}
