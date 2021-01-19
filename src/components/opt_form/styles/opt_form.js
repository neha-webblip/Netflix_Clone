import styled from 'styled-components/macro';

export const Container = styled.div `
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 height: 100%;
 margin-top: 20px;

 @media (max-width: 100px){
     flex-direction: column;
     align-items: center;
 }
`;

export const Input = styled.input `
max-width: 450px;
width: 100%;
padding: 10px;
height: 55px;
border: 0;
box-sizing: border-box;
`;

export const Button = styled.button `
display: flex;
align-items: center;
height: 55.5px;
background: red;
border: 0;
color: white;
padding: 0 30px;
font-size: 26px;
cursor: pointer;

img{
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

}

@media (max-width: 1000px){
    width: 16px;
}

`;

export const Text = styled.p `
color: white;
text-align: center;
font-size: 20px;

`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;