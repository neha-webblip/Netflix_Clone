import React from 'react';
import { Jumbotron } from '../components';
import jumboData from '../fixtures/jumbo';

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
      <Jumbotron key = {item.id} direction = {item.direction}>
       <Jumbotron.Pane>
        <Jumbotron.Title>{item.title}</Jumbotron.Title>
        <Jumbotron.Subtitle>{item.subtitle}</Jumbotron.Subtitle>
       </Jumbotron.Pane>

       <Jumbotron.Pane>
        <Jumbotron.Image src = {item.image} alt = {item.alt}/>
       </Jumbotron.Pane>
      </Jumbotron>
      
      ))}
    </Jumbotron.Container>
  );
}

