import React from 'react'

import {SiGmail, SiGithub, SiLinkedin} from 'react-icons/si'

import {Container, Profile, About, Icons} from './styles'

import ProfileImage from '../../assets/profile.jpg'

function Sobre() {
    return(
        <Container>
            <Profile id="sobre">
                <img src={ProfileImage} alt="profile"/>
                <h1>Michael Gonçalves</h1>
                <Icons>
                    <a href="mailto:maicon.rafael17@gmail.com" target="blank"><SiGmail size={30} color="red" /></a>
                    <a href="https://github.com/Mikelovex" target="blank"><SiGithub size={30} color="black" /> </a>
                    <a href="https://www.linkedin.com/in/michaelmike/" target="blank"><SiLinkedin size={30} color="#3867d6"/></a>
                </Icons>
            </Profile>
            <About>
                <h1>Sobre</h1>
                <h3>Conheça um pouco sobre mim</h3>
                <p>Meu nome é michael, Sou apaixonado por tecnologia e estou buscando por minha primeira oportunidade como desenvolvedor.No momento estou aprendendo Typescript com nodeJs e Reactjs.</p>
                <p>Estou cursando o primeiro semestre de Analise e desenvolvimento de sistemas na universidade cruzeiro do sul.</p>
            </About>
        </Container>
    )
}

export default Sobre