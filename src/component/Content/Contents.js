import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {Thumbnail, WrapperThumb, WrapperFocus, HeaderCard, SmallBtn,fullSize} from "./Style";



class Contents extends Component{

    
    render(){

        const {list, showModal, isLogin }  = this.props;
       

        return(
            <div style={{textAlign:'left'}}>
                {list.map(item =>

                    <WrapperThumb key={item.id}  >
                        <WrapperFocus >
                            <div style={fullSize} onClick={()=>showModal(item.id,item.urls.regular, item.alt_description)}></div>
                            
                            <HeaderCardWrapper
                                downloadLocation={`${item.links.download}?force=true`}  
                                isLogin={isLogin}
                                
                            />

                        </WrapperFocus>
                        <Thumbnail src={item.urls.small} alt="img"  />
                    </WrapperThumb>                   
                )}

            </div>
        )
    }
}

const HeaderCardWrapper = ({downloadLocation, isLogin})=>(
    <HeaderCard>
        <SmallBtn onClick={()=>isLogin(true)}>
             <FontAwesomeIcon icon="heart" color="#ff7979" />
        </SmallBtn>

        <SmallBtn href={downloadLocation} >
             <FontAwesomeIcon icon="download" color="#34495e" />
        </SmallBtn>
    </HeaderCard>
)
export default Contents;