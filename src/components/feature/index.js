import React from 'react';
import {Container, Title, Subtitle} from './styles/feature';

export default function Feature ({children, ...restProps}){
    return <Container {...restProps}>
    {children}
    </Container>;
}

Feature.Title =  function FeatureTitle ({children, ...restProps}){
    return <Title {...restProps}>
    {children}
    </Title>;
}

Feature.Subtitle =  function FeatureSubtitle ({children, ...restProps}){
    return <Subtitle {...restProps}>
    {children}
    </Subtitle>;
}
