import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ModalContainer, ModalContentWrapper, WrapperZoomImage, fullSize} from "./Style";

const displayNone = {
    display: 'none'
}
const displayBlock = {
    display:'block',
}

const zoomImgStyle ={
    width: '100%',
    height: 'auto',
    margin:'15px',
}
const urlLogin ="https://unsplash.com/oauth/authorize?clien_id=1c54c4030ce4c426397d8cfab4a89847458ec4b01ef21b5cf326af371ac83e3e&response_type=code&redirect_uri='http://localhost:3000/'";

const closeIcon ={margin:'10px', cursor:'pointer', position:'fixed', zIndex:'1',}

class Modal extends Component{

    createMarkup() {
        return {__html: iframe};
      }

    render(){
        const {isShow,closeModal,zoomImage, imageAlt,isLogin} = this.props;

        return(
            <ModalContainer
            style={isShow ? displayBlock : displayNone} 
            >
              

                <FontAwesomeIcon icon='times' color='#fff' size='lg' style={closeIcon} onClick={()=>closeModal()}/>

                <ModalContentWrapper>

                    <WrapperZoomImage>
                       <SetModalContent
                        isLogin={isLogin}
                        zoomImage={zoomImage}
                        imageAlt={imageAlt}   
                        iframe={this.createMarkup()}                    
                       />
                    </WrapperZoomImage>
                      
                </ModalContentWrapper>

                <div style={fullSize} onClick={()=>closeModal()}></div>

            </ModalContainer>
        )
    }
}

const SetModalContent=({isLogin,zoomImage,imageAlt, iframe})=>(

    isLogin ?
     <div dangerouslySetInnerHTML={iframe} />
     :  <img src={zoomImage} alt={imageAlt} style={zoomImgStyle}/>

)


const iframe = `<iframe src="${urlLogin}" width="540" height="450"></iframe>`;


export default Modal;