import React, {Component} from "react";
import Div from '../Div/Div';
import Icon from '../Icon/Icon';
import download from '../../images/download2.png';
import product from '../../images/product.png';
import example from '../../images/example.png';
import video from '../../images/video.png';
import './Content.css'

class Content extends Component{
    render () {
        return (
            <div className="about-product">
                <div>
                    <div className="violet">
                        <div className="describtion">
                            <img src={product} alt="product"></img>
                            <p>Описание продукт</p>
                        </div>
                        <div className="arrow">
                            <Icon className={"fa fa-arrow-circle-o-right fa-2x"} aria-hidden="true"/>
                        </div>
                    </div>
                    <div className="second">
                        <div >
                            <div className="green">
                                <img src={download} alt="download"></img>
                                <p>Скачать
                                <p className="font-size">Докум-ция, программы и драйверы</p>
                                </p>
                            </div>
                            <div className="blue">
                                <img src={example} alt="example"></img>
                                <p>Примеры 
                                    <p>C# API</p>
                                </p>
                            </div>                            
                        </div>
                        <div className="yellow">
                            <img src={video} alt="prvideooduct"></img>
                            <p>Видео
                                <p></p>
                            </p>
                        </div>
                    </div>
                </div>              
                <Div className="product"/>
            </div>
        );

    }
}
export default Content;