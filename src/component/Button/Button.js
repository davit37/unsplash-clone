import React from 'react';
import {ButtonPrimary} from './Style'

const Button = ({children, type })=>(

    <ButtonPrimary type={type}>
        {children}
    </ButtonPrimary>
);

export default Button;

