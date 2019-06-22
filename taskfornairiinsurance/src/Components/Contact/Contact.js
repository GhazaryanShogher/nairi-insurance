import React, {Component} from "react";
import Div from '../Div/Div';
import Input from '../Input/Input';
import Icon from '../Icon/Icon';
import H3 from '../H3/H3';
import './Contact.css'

class Contact extends Component{
    render () {
        return (
            <div >
                <div class="tooltip">
                    <Icon className={"fa fa-paper-plane-o fa-2x"} aria-hidden="true"/>
                    <div>
                        <H3 heading={"Форма обратной связи"}/>
                        <p>разработка, модификация или просто вопросы по модулю...</p>
                    </div>
                </div>
            </div>
        );

    }
}
export default Contact;