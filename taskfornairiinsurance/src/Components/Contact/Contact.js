import React, {Component} from "react";
import Div from '../Div/Div';
import Input from '../Input/Input';
import Icon from '../Icon/Icon';
import H3 from '../H3/H3';
import './Contact.css'

class Contact extends Component{
    render () {
        return (
            <div className="form">
                <div className="tooltip">
                    <Icon className={"fa fa-paper-plane fa-2x"} aria-hidden="true"/>
                    <div>
                        <H3 heading={"Форма обратной связи"}/>
                        <p>разработка, модификация или просто вопросы по модулю...</p>
                    </div>
                </div>                
                <div className="contact">                    
                    <div className="submit">
                        <div className="first-part">
                            <select>
                                <option>Выберите тип обращения</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                            <Input placeholder={"Имя *"} value={"Имя *"}/> 
                            <Input placeholder={"E-mail *"} value={"E-mail *"}/> 
                            <Input placeholder={"Телефон"} value={"Телефон"}/> 
                        </div>
                        <div className="first-part">
                            <textarea placeholder="Сообщение *" value="Сообщение *"></textarea>
                            <Input type={"button"} value={"Отправить"}/>
                        </div>
                    </div>              
                </div>
            </div>
        );

    }
}
export default Contact;