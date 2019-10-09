import styled from "styled-components";

const Thumbnail =styled.img`
    width: 100%;
    height:100%;
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
    object-fit: cover;
`;

const WrapperFocus = styled.div`
    height:100%;
    width:100%;
    position:absolute;
    background-color: #1b1b1969;
    display:none;   
`;

const WrapperThumb = styled.div`

    display:inline-block;
    margin: 10px;
    height: 340px;
    width: 300px;
    overflow:hidden;
    text-align:center;
    position:relative;

    :hover{
        cursor: pointer;
    }

    &:hover > ${WrapperFocus}{
        display: block;
    }
    
`;

const HeaderCard = styled.div`
    width:100%;
    height:13%;
    position:absolute;
    top:0;

    :hover{
        cursor:auto;
    }
`;

const WrapperLike =styled.div`
    height: 60%;
    margin:10px;
    margin-left: auto;
    width: 46px;
    padding-top: 11px;
    background-color: #ffffffd1;
    border:none;
    border-radius: 10%;
`;


const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position:fixed;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.4);
    z-index:1;
    overflow-y:scroll;
    overflow-x:hidden;
`;

const ModalContentWrapper = styled.div`

    min-height:100%;
    height:auto;
    width: 70%;
    position:relative;
    background-color:white;
    margin: 0 auto;
    margin-bottom: 10px;
    top:10%;
    border-radius:0.5px;
    
`;

const WrapperZoomImage = styled.div`
    margin: 0 auto;
    margin-top: 30px;
    width: 50%; 
    height: inherit;
`;
    


export {Thumbnail, WrapperThumb, WrapperFocus, HeaderCard, WrapperLike, ModalContainer,  ModalContentWrapper, WrapperZoomImage}