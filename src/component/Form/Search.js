import React, {Component} from 'react';
import {SearchInput} from './Style';
import {Button} from '../Button';


class Search extends Component{

    componentDidMount(){
        if(this.input){
            this.input.focus();
        }
    }

    render(){

        const{value, onChange, onSubmit, children} = this.props;

        return(
            <form onSubmit={onSubmit}>

                {children}

                <SearchInput type='text'
                value={value}
                onChange={onChange}
                ref = {el => this.input = el}/>

                <Button 
                type={'sumbit'}>
                    {children}
                </Button>


            </form>
        )
    }
}

export default Search;