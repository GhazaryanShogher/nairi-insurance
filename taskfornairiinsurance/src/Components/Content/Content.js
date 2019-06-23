import React, {Component} from "react";
import Div from '../Div/Div';
import H3 from '../H3/H3';
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
                <div className="blocks">
                    <div className="violet">
                        <div className="describtion">
                            <img src={product} alt="product"></img>
                            <H3 heading={"Описание продукт"}/>
                        </div>
                        <div className="arrow">
                            <Icon className={"fa fa-arrow-circle-o-right fa-2x"} aria-hidden="true"/>
                        </div>
                    </div>
                    <div className="second">
                        <div >
                            <div className="green">
                                <img src={download} alt="download"></img>
                                <div>
                                    <H3 heading={"Скачать"}/>
                                    <p className="font-size">Докум-ция, программы и драйверы</p>
                                </div>
                            </div>
                            <div className="blue">
                                <img src={example} alt="example"></img>
                                <div>
                                    <H3 heading={"Примеры"}/> 
                                    <p>C# API</p>
                                </div>
                            </div>                            
                        </div>
                        <div className="yellow">
                            <div className="describtion">
                                <img src={video} alt="prvideooduct"></img>
                                <div>                                
                                    <H3 heading={"Видео"}/>
                                    <p>Смотреть</p>
                                </div>
                            </div>
                            <div className="arrow">
                                <Icon className={"fa fa-arrow-circle-o-right fa-2x"} aria-hidden="true"/>
                            </div>
                        </div>
                    </div>
                </div>              
                <Div className="product"/>
            </div>
        );

    }
}
export default Content;