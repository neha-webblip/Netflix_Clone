import React from 'react';
import {Accordion} from '../components';
import OptForm from '../components/opt_form';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer(){
    return (
        <Accordion>
        <Accordion.Title> Frequently Asked Questions </Accordion.Title>

          {faqsData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}

        <Accordion.Item/>

        <OptForm>
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        <OptForm.Break/>
        <OptForm.Input placeholder = "Email Address"/>
        <OptForm.Button>GET STARTED</OptForm.Button>
        </OptForm>
          

        </Accordion>
    );

}