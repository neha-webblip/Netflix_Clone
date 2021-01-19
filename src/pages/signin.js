import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {FirebaseContext} from '../context/firebase';
import {HeaderContainer} from '../containers/header';
import {FooterContainer} from '../containers/footer';
import {Form} from '../components';

export default function Signin (){

const history = useHistory();
const { firebase } = useContext(FirebaseContext);
const [emailAddress, setEmailAddress] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const isInvalid = password === '' || emailAddress === '';
const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };


    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In </Form.Title>
                { error && <Form.Error data-testid ="error">
                    {error}
                    </Form.Error>
                }

                <Form.Block onSubmit = {handleSignin} method = "POST">

                    <Form.Input placeholder = "Email Address" value = {emailAddress}
                     onChange = {({target}) => setEmailAddress(target.value)}
                    /> 

                    <Form.Input type = "password" placeholder = "Password" autocomplete = "off" value = {password}
                    onChange = {({target}) => setPassword(target.value)}
                    />
                <Form.Submit disabled = {isInvalid} type = "submit">
                    Sign In
                </Form.Submit>

                </Form.Block>

                <Form.Paragraph>
                <input type="checkbox" id="myCheck"/>
                Remember me
                </Form.Paragraph>

                <Form.Text>
                    New to Netflix? <Form.Link to = "/signup"> Sign up now. </Form.Link>
                </Form.Text>

                <Form.Paragraph>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn More 
                </Form.Paragraph>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    );
}