import React from 'react';
import {Container, Block, Error, Title, Text, Paragraph, Link, Input, Submit} from './styles/form';

export default function Form ({children, ...restProps}){
    return <Container {...restProps}>
        {children}
    </Container>
}

Form.Block = function FormBlock({children, ...restProps}){
    return <Block {...restProps}>
        {children}
    </Block>
}

Form.Error = function FormError({children, ...restProps}){
    return <Error {...restProps}>
        {children}
    </Error>
}

Form.Title = function FormTitle({children, ...restProps}){
    return <Title {...restProps}>
        {children}
    </Title>
}

Form.Text = function FormText({children, ...restProps}){
    return <Text {...restProps}>
        {children}
    </Text>

}

Form.Paragraph = function FormParagraph({children, ...restProps}){
    return <Paragraph {...restProps}>
        {children}
    </Paragraph>
}

Form.Link = function FormLink({children, ...restProps}){
    return <Link {...restProps}>
        {children}
    </Link>
}

Form.Input = function FormInput({children, ...restProps}){
    return <Input {...restProps}>
        {children}
    </Input>
}

Form.Submit = function FormSubmit({children, ...restProps}){
    return <Submit {...restProps}>
        {children}
    </Submit>
}