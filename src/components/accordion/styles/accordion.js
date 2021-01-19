import styled from 'styled-components/macro';

export const Container = styled.div `
 display: flex;
 border-bottom: 8px solid #222;

`;

export const Inner = styled.div `
 display: flex;
 flex-direction: column;
 max-width: 815px;
 margin: auto;
 padding: 70px 45px;

`;

export const Title = styled.h1 `
 font-size: 45px;
 line-height: 1.1;
 color:white;
 text-align: center;

 @media (max-width: 600px) {
     font-size: 35px;
 }
`;

export const Frame   = styled.div `
`;

export const Item = styled.div `
 color: white;
 margin-width: 670px;
 margin-bottom: 10px;
`;

export const Header = styled.div `
 display: flex;
 justify-content: space-between;
 cursor: pointer;
 font-size: 22px;
 font-weight : normal;
 background: #303030;
 padding: 15px 20px;
 margin-bottom: 2px;
 align-items: center;

 img{
     filter: invert(1);
     width: 22px;
     @media (max-width: 600px){
         width:16px;
     }
 }

 @media (max-width: 600px){
     width: 16px;
     
 }
`;

export const Body = styled.div `
 max-height: 1200px;
 padding: 0.8em 2.2em 0.8em 1.2em;
 font-size: 18px;
 font-weight: normal;
 line-weight: normal;
 background: #303030;
 white-space: pre-wrap;
 transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
 user-select: none;

 @media(max-width: 600px){
     font-size: 14px;
     line-height: 22px;
 }
`;
