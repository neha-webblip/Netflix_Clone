import styled from 'styled-components/macro';

export const Container = styled.div `
 display: flex;
 padding: 165px 45px;
 flex-direction: column;
 border-bottom: 8px solid solid #222;
 text-align: center;

`;

export const Title = styled.h1 `
 margin: auto;
 max-width: 640px;
 font-size: 50px;
 font-weight: 500;
 color: white;

 @media (max-width: 600px){
     font-size: 35px;
 }
`;

export const Subtitle = styled.h2 `
 margin: 16px auto;
 max-width: 640px;
 font-size: 26px;
 font-weight: normal;
 color: white;

 @media (max-width: 600px){
     font-size: 35px;
 }
`;