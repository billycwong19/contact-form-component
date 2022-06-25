import React, { useRef } from 'react'
// WERE UTILIZING EMAILJS TO RECEIVE EMAILS DIRECTLY FROM THE FORM https://www.emailjs.com/docs/examples/reactjs/ 
import emailjs from 'emailjs-com'
// WERE UTILIZING STYLED-COMPONENTS TO BUILD THE FORM
import { 
  ContactFormStyled, 
  TextInput,
  TextAreaInput,
  ContactSubmit
} from './ContactForm.style'



const ContactForm = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    // ENTER YOURE INFORMATION HERE
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
      alert(result.text)
    }, (error) => {
      alert(error.text)
    })  

    e.target.reset();
  }
    
  return (
        <ContactFormStyled ref={form} onSubmit={sendEmail}>
            <TextInput type="text" name="name" placeholder='name' required />
            <TextInput type="email" name="email" placeholder='email' required />
            <TextAreaInput name="message" type="text" placeholder='message' required />
            <ContactSubmit type="submit" value="Send" />
        </ContactFormStyled>
  )
}

export default ContactForm