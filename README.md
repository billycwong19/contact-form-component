# contact form react component 

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
<img src='https://res.cloudinary.com/practicaldev/image/fetch/s--E7SQLjAt--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5d14su1hfqzbeqa2qhbr.png' height='27.5'>



### please refer to the package.json or prior to use install both styled-components and emailjs.

#

<img src="./public/contactformscreenshot.png" height='200'>

### this component will allow someone to fill out the contact form on your portfolio or website and send an email directly to you. the email will contain a name, email, and message. for more information visit https://www.emailjs.com. 

#

### if you go straight to the contact form index.js you will find how I import emailjs and the functions to complete that send email functionality. you will have to enter your own information and sign up with emailjs.

        const sendEmail = (e) => {
        e.preventDefault();
        // ENTER YOURE INFORMATION HERE
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

        .then((result) => {
             alert(result.text)
        }, (error) => {
             alert(error.text)
             })  
        }

#

## install necessary packages 

        npm i styled-components

        npm i emailjs-com

#

## by William Wong
### https://github.com/billycwong19
