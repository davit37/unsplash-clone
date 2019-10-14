import React, {Component} from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons'



//Style
import {Container} from './Style';

//component
import {Search} from '../Form';
import {Contents, Modal} from "../Content";



import {
    DEFAULT_QUERY,
    ACCESS_KEY,
    PARAM_PAGE,
    PARAM_AUTH,
    PARAM_SEARCH,
    PATH_CATEGORY,
    PATH_SEARCH,
    PATH_BASE,
} from '../../constants';

library.add(faHeart,faTimes,faDownload)

class App extends Component{

    constructor(prop){
        super(prop);

        this.state ={
            results :null,
            searchTerm: DEFAULT_QUERY,
            page:1,
            isShow: false,
            zoomImage: null,
            imageAlt:null,
            isLogin:false,
        }

        this.fetchGetPhotoes = this.fetchGetPhotoes.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this); 
        this.setContents = this.setContents.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this)
        this.setLogin = this.setLogin.bind(this)
    }

    fetchGetPhotoes(searchTerm, page=1){
        
        axios(`${PATH_BASE}${PATH_SEARCH}${PATH_CATEGORY}?${PARAM_AUTH}${ACCESS_KEY}&${PARAM_PAGE}${page}&${PARAM_SEARCH}${searchTerm}`)
        .then(result => this.setContents(result.data.results))
        .catch(error => console.log(error))
    }

    setContents(result){
     

        const {results} = this.state;
        
        const oldResults = results ? results : [];

        const updateResult = [...oldResults, ...result];

        this.setState({
            results: updateResult
        })
    }

    componentDidMount(){
        const {searchTerm} = this.state;

        this.fetchGetPhotoes(searchTerm);   
    }

    componentDidUpdate(){
        window.addEventListener('scroll', this.handleScroll);
        return () => window.removeEventListener('scroll', this.handleScroll);
    }

    onSearchChange(event){
        this.setState({
            searchTerm: event.target.value
        })
    }

    onSearchSubmit(event){
        const {searchTerm} = this.state;
        
        this.setState({
            results : null,
            page:1,
        });    
     
        this.fetchGetPhotoes(searchTerm);
        
        
        event.preventDefault();
    
    }

    handleScroll(event) {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    
        const {searchTerm, page} = this.state;  

        const morePage = page+1;

        this.setState({page : morePage});
     
        this.fetchGetPhotoes(searchTerm,morePage);

        event.preventDefault();
    }

    showModal(id, zoomImagePath, imageAlt){

        document.body.style.overflow ='hidden';

        this.setState({
            isShow: true,
            zoomImage: zoomImagePath,
            imageAlt:imageAlt,
        })
    }

    closeModal(){
        
        document.body.style.overflow ='scroll';

        this.setState({
            isShow: false,
            zoomImage:null,
            isLogin:false
        })
    }

    setLogin(isLogin){
        this.setState({
            isLogin:isLogin,
            isShow: true,
        })
    }

    

    render(){
        const {searchTerm, results, isShow, isLogin, zoomImage} = this.state;

        return(
            <div>
            <Modal
                isShow={isShow}
                isLogin={isLogin}
                closeModal={this.closeModal}
                zoomImage={zoomImage}
            />
        
         
            <Container>
                <Search
                    value = {searchTerm}
                    onChange={this.onSearchChange}
                    onSubmit={this.onSearchSubmit}
                    >
                        Search
                </Search>
                
                    {
                        results ?
                        <Contents
                            list={results}
                            showModal={this.showModal}
                            isLogin={this.setLogin}
                            />
                        :
                            ""
                        
                    }   
                          
            </Container> 
        </div>
        )
        
    }
}

export default App;