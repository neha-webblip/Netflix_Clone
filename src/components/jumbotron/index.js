import React from 'react';
import {Container, Inner, Item, Pane, Title, Subtitle, Image} from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps })
{
return (
    <Item {... restProps}>
        <Inner direction = {direction}>
          {children}
        </Inner>
    </Item>
)
}
 
Jumbotron.Container = function JumbotronContainer ({ children, ...restProps}){
    return <Container {... restProps}> {children}</Container>;
}

Jumbotron.Pane = function JumbotronPane ({ children, ...restProps}){
    return <Pane {... restProps}> {children}</Pane>;
}

Jumbotron.Title = function JumbotroTitle ({ children, ...restProps}){
    return <Title {... restProps}> {children}</Title>;
}

Jumbotron.Subtitle = function JumbotronSubtitle ({ children, ...restProps}){
    return <Subtitle {... restProps}> {children}</Subtitle>;
}

Jumbotron.Image = function JumbotronImage ({...restProps}){
    return <Image {... restProps}/>;
}