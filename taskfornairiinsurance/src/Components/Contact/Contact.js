import React, {Component} from "react";
import Div from '../Div/Div';
import Input from '../Input/Input';
import Icon from '../Icon/Icon';
import H3 from '../H3/H3';
import './Contact.css'

class Contact extends Component{
    state={
        height:0
    }
    showTooltip =()=>{
        this.setState({
            height:85
        })
    }
    hideTooltip =()=>{
        this.setState({
            height:0
        })
    }
    render () {
        return (
            <div className="form" onMouseLeave={this.hideTooltip}>
                <div className="tooltip" style={{height: `${this.state.height}px`}}>
                    <Icon className={"fa fa-paper-plane fa-2x"} aria-hidden="true"/>
                    <div>
                        <H3 heading={"Форма обратной связи"}/>
                        <p>разработка, модификация или просто вопросы по модулю...</p>
                    </div>
                </div>                
                <div className="contact">                    
                    <div className="submit">
                        <div className="first-part">
                            <select onMouseEnter={this.showTooltip}>
                                <option>Выберите тип обращения</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                            <Input placeholder={"Имя *"}/> 
                            <Input placeholder={"E-mail *"}/> 
                            <Input placeholder={"Телефон"}/> 
                        </div>
                        <div className="first-part">
                            <textarea placeholder="Сообщение *"></textarea>
                            <Input type={"button"} value={"Отправить"}/>
                        </div>
                    </div>              
                </div>
            </div>
        );

    }
}
export default Contact;