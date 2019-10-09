import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {Thumbnail, WrapperThumb, WrapperFocus, HeaderCard, WrapperLike} from "./Style";



class Contents extends Component{

  
    render(){

        const {list, showModal }  = this.props;
       

        return(
            <div style={{textAlign:'left'}}>
                {list.map(item =>

                    <WrapperThumb key={item.id} onClick={()=>showModal(item.id,item.urls.regular, item.alt_description)} >
                        <WrapperFocus >
                            
                            <HeaderCardWrapper/>

                        </WrapperFocus>
                        <Thumbnail src={item.urls.small} alt="img"  />
                    </WrapperThumb>                   
                )}

            </div>
        )
    }
}

const HeaderCardWrapper = ()=>(
    <HeaderCard>
        <WrapperLike>
             <FontAwesomeIcon icon="heart" color="#ff7979" />
        </WrapperLike>
    </HeaderCard>
)
export default Contents;