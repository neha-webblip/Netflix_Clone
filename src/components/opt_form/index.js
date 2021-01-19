import React from 'react';
import {Container, Input, Button, Text, Break} from './styles/opt_form';


export default function OptForm( { children, ...restProps}){
    return <Container {...restProps}> {children} </Container>;

}

OptForm.Input = function OptFormInput( { ...restProps}){
    return <Input {...restProps} />;
}

OptForm.Button = function OptFormButton( { children, ...restProps}){
    return (
        <Button {...restProps}>
            {children} <img src = "/images/icons/bracket.png" alt = "GET STARTED" />

        </Button>
    )
}  

OptForm.Text = function OptFormText ({children, ...restProps}){
    return <Text {...restProps}> {children} </Text>;

} 

OptForm.Break = function OptFormBreak({ ...restProps }) {
    return <Break {...restProps} />;
}