import React from 'react'

import {Container, Icons} from './styles'

import {AiFillPhone, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'

function Contato() {
    return(
        <Container id="contato">
            <h1>Contato</h1>
            <p>Sinta-se a vontade para entrar em contato comigo, Estou disponivel todos os dias.</p>
            <Icons>
                <span>< AiFillPhone size={20} color="#353b48" /> <strong>(11) 93715-8397</strong> </span>
                <span>< SiGmail size={20} color="red"/> <strong>maicon.rafael17@gmail.com</strong> </span>
                <span>< AiFillGithub size={20}/> <strong>https://github.com/Mikelovex</strong> </span>
                <span>< AiFillLinkedin size={20} color="#3867d6" /> <strong>https://www.linkedin.com/in/michaelmike/</strong> </span>
            </Icons>
        </Container>
    )
}

export default Contato