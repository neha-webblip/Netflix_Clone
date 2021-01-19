import styled from 'styled-components/macro';
import {Link as ReachRouterLink} from 'react-router-dom';

export const Container = styled.div `
 width: 100%;
 margin: auto;
 display: flex;
 flex-direction: column;
 background: rgba(0, 0, 0, 0.70);
 border-radius: 5px;
 box-sizing: border-box;
 min-height: 660px;
 max-width: 450px;
 margin-bottom: 100px;
 padding: 60px 68px 40px;

`;

export const Block = styled.form `
 display: flex;
 flex-direction: column;
 width: 100%;
 max-width: 450px;
`;

export const Error = styled.div `
 background: #e87c03;
 border-radius: 3px;
 color: white;
 font-size: 14px;
 margin-bottom: 16px;
 padding: 15px 20px;

`;

export const Title = styled.h1 `
font-size: 32px;
font-weight: bold;
margin-bottom: 28px; 
color: white;

`;

export const Text = styled.p `
 font-size: 16px;
 font-weight: 500;
 color: #737373;

`;

export const Paragraph = styled.p `
 font-size: 12px;
 line-height: normal;
 color: #8c8c8c;
 margin-top: 10px;

`;

export const Link = styled(ReachRouterLink) `
 color: white;
 text-decoration: none;

 &:hover {
     text-decoration: underline;
 }
`;

export const Input = styled.input `
 margin-bottom: 20px;
 background: #333;
 border-radius: 3px;
 border: 0;
 color: white;
 height: 40px;
 padding: 5px 20px;
 line-height: 50px;

 &:last-of-type{
     margin-bottom: 30px;
 }

`;

export const Submit = styled.button `
 background: red;
 border: 0;
 border-radius: 3px;
 font-size: 16px;
 font-weight: bold;
 color: white;
 cursor: pointer;
 padding: 16px;
 margin: 20px 0 12px;

`;