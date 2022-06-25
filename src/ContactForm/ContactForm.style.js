import styled from 'styled-components'

export const ContactFormStyled = styled.form`
    background-color: ${({ theme }) => theme.backgroundColor };
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    padding: 2em 0;

    @media only screen and (min-width: 415px) {
        width: 85%;        
    }
    @media only screen and (min-width: 666px) {
        width: 50%;        
    }
    
`

export const TextInput = styled.input`
    color:${({ theme }) => theme.fontColor};
    width: 80%;
    font-size: 14px;
    padding: 1em ;
    margin-bottom: 1em;
    display: block;
    border: 2px solid rgba(0, 0, 0, 0.0);
    border-radius: 5px;
    box-sizing: border-box;

    &:focus {
        border: 2px solid ${({ theme }) => theme.accentColor};
        outline: none;    
    }
`

export const TextAreaInput = styled.textarea`
    color:${({ theme }) => theme.fontGreen};
    width: 80%;
    font-size: 14px;
    padding: 1em ;
    margin-bottom: 1em;
    display: block;
    border: 2px solid rgba(0, 0, 0, 0.0);
    border-radius: 5px;
    box-sizing: border-box;
    height: 10em;
    resize: none;

    &:focus {
        border: 2px solid ${({ theme }) => theme.accentColor};
        outline: none;
    }
    
`

export const ContactSubmit = styled.input`
    width: 50%;
    border: none;
    height: 3em;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.fontColor };

    &:hover {
        background-color: ${({ theme }) => theme.activeColor};
        color: ${({ theme }) => theme.fontColor };
        cursor: pointer;
        
    }
    &:active {
        width: 49%;
    }
`
