import React from 'react';
import { Footer } from '../components';

export function FooterContainer(){
    return (
        <Footer>
            <Footer.Title href = "#"> Questions? Contact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href = "#">FAQ</Footer.Link>
                    <Footer.Link href = "#">Investor Relations</Footer.Link>
                    <Footer.Link href = "#">Privacy</Footer.Link>
                    <Footer.Link href = "#">Speed Test</Footer.Link>
                    <br>
                    </br>
                    <Footer.Link>Netflix Pakistan</Footer.Link>
                    
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href = "#">Help Center</Footer.Link>
                    <Footer.Link href = "#">Jobs</Footer.Link>
                    <Footer.Link href = "#">Cookie Prefrences</Footer.Link>
                    <Footer.Link href = "#">Legal Notices</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href = "#">Account</Footer.Link>
                    <Footer.Link href = "#">Ways to Watch</Footer.Link>
                    <Footer.Link href = "#">Corporate Information</Footer.Link>
                    <Footer.Link href = "#">Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href = "#">Media Center</Footer.Link>
                    <Footer.Link href = "#">Terms of Use</Footer.Link>
                    <Footer.Link href = "#">Contact Us</Footer.Link>
                </Footer.Column>

            </Footer.Row>

        </Footer>
    )

}