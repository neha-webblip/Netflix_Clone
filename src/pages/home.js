import React from 'react';
import {HeaderContainer} from '../containers/header';
import {Feature, OptForm} from '../components';
import {JumbotronContainer} from '../containers/jumbotron';
import {FooterContainer} from '../containers/footer';
import {FaqsContainer} from '../containers/faqs';

export default function Home() {
    return (
        <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
           <b>Unlimited films, TV programmes and more.</b>
          </Feature.Title>

          <Feature.Subtitle>
            Watch anywhere. Cancel anytime.
          </Feature.Subtitle>

          <OptForm>
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        <OptForm.Break/>
        <OptForm.Input placeholder = "Email Address"/>
        <OptForm.Button>GET STARTED</OptForm.Button>
        </OptForm>
        
        </Feature>

      </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
        </>
    )
}  