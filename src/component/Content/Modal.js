import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ModalContainer, ModalContentWrapper, WrapperZoomImage} from "./Style";

const displayNone = {
    display: 'none'
}
const displayBlock = {
    display:'block',
}

const zoomImgStyle ={
    width: '100%',
    height: 'auto',
}

const closeIcon ={margin:'10px', cursor:'pointer', position:'fixed'}

class Modal extends Component{

    render(){
        const {isShow,closeModal,zoomImage, imageAlt} = this.props;

        return(
            <ModalContainer
            style={isShow ? displayBlock : displayNone} 
            onClick={()=>closeModal()}
            
            >

                <FontAwesomeIcon icon='times' color='#fff' size='lg' style={closeIcon}/>

                <ModalContentWrapper>

                    <WrapperZoomImage>
                        <img src={zoomImage} alt={imageAlt} style={zoomImgStyle}/>
                    </WrapperZoomImage>
                      
                </ModalContentWrapper>

            </ModalContainer>
        )
    }
}



export default Modal;