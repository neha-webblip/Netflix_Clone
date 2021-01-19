import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {FirebaseContext} from '../context/firebase';
import {HeaderContainer} from '../containers/header';
import {FooterContainer} from '../containers/footer';
import {Form} from '../components';


export default function Signup (){
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = firstName === '' || password === '' || emailAddress === '';
    const handleSignup = (event) => {
        event.preventDefault();
    
        return firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password)
          .then((result) =>
            result.user
              .updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
              })
              .then(() => {
                history.push(ROUTES.BROWSE);
              })
          )
          .catch((error) => {
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
          });
      };
      
 return (
    <>
    <HeaderContainer>
    <Form>
        <Form.Title>Sign Up </Form.Title>
        { error && <Form.Error data-testid ="error">
            {error}
            </Form.Error>
        }
        <Form.Block onSubmit = {handleSignup} method = "POST">

             <Form.Input placeholder = "Name" value = {firstName}
                     onChange = {({target}) => setFirstName(target.value)}
                    /> 

             <Form.Input placeholder = "Email Address" value = {emailAddress}
                     onChange = {({target}) => setEmailAddress(target.value)}
                    /> 

             <Form.Input type = "password" placeholder = "Password" autocomplete = "off" value = {password}
                    onChange = {({target}) => setPassword(target.value)}
                    />
            
            <Form.Submit disabled = {isInvalid} type = "submit">
                    Sign Up
                </Form.Submit>

        </Form.Block>

                <Form.Text>
                    Already a member? <Form.Link to = "/signin"> Sign in now. </Form.Link>
                </Form.Text>

                <Form.Paragraph>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn More 
                </Form.Paragraph>
        </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
 )
}