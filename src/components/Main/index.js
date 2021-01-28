import React from 'react'

import {Container, Description, Image, Box } from './Styles'

import backgroundImage from '../../assets/coding.svg'

function Main() {

  

    return(
        <Container id="main">

            <Description>
                <Box>
                    <h3>Desenvolvedor Júnior</h3>
                    <h1>Michael Gonçalves</h1>
                    <p>Estou em busca de aprender novas tecnologias e melhorar as que eu ja conheço.</p>
                    <a href="https://drive.google.com/file/d/1qW6adB-BQ4h53fV2Je5oVCvMYtrFBtTv/view?usp=sharing" target="blank"><button>Baixar Curriculo</button></a>
                </Box>
            </Description>
            <Image>
                <img src={backgroundImage} alt="computer"/>
            </Image>

        </Container>
    )
}

export default Main