import React, {Component} from "react";
import Div from '../Div/Div';
import Li from '../Li/Li';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import logo from '../../logo.svg';
import price from '../../images/download.png';
import './Header.css'

class Header extends Component{
     menu = ()=>{
        var element = document.getElementById("menu");
       if(element.classList.contains("hidden")){
           element.classList.remove("hidden");       
       } else{
        element.className = "hidden";
       }
    }
    render () {
        return (
            <div className="main">
                <div className="nav-menu">
                    <Div  className={"logo"} text = {<img src={logo} alt="logo"></img>}/>
                    <Div text={<Icon className="fa fa-bars fa-3x" aria-hidden="true" callback={this.menu}/>}/>
                    <Div className={"hide"} text = {
                        <ul>
                            <Li className={"home"} name={"Главная"}/>
                            <Li className={"products1"} name={"Продукты"}>  
                            <Div className={"hr"}/></Li>   
                            <Li className={"services"} name={"Услуги"}/>
                            <Li className={"about"} name={"О нас"}/>
                            <Li className={"contacts"} name={"Контакты"}/>
                    </ul>
                    }>
                    </Div>
                    <Div className= {"hidden"} id={"menu"}  text = {
                        <ul>
                            <Li className={"home"} name={"Главная"}/>
                            <Li className={"products"} name={"Продукты"}/>
                            <Li className={"services"} name={"Услуги"}/>
                            <Li className={"about"} name={"О нас"}/>
                            <Li className={"contacts"} name={"Контакты"}/>
                    </ul>
                    }>
                    </Div>
                </div>
                <div className="nav">
                    <Div className="after-nav" text={"Assistant Interface Debugger"}/>
                    <div className="nav-inputs">
                        <Div className="price-part" text={<a href="#" download><img src={price} alt="price list"></img>Скачать наш прайс</a>}></Div>
                        <Input className={"search"} placeholder={`Поиск по сайту`}/>
                    </div>
                </div> 
            </div>
        );

    }
}
export default Header;