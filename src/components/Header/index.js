import React from 'react'

import {Navigation} from './styles'

import {Link} from 'react-scroll'

import logoImg from '../../assets/logo.svg'

function Header() {
    return(
        <Navigation>
            <img src={logoImg} alt="logo"/>
            <ul>
                <Link to="sobre" smooth={true} duration={1000}><li>Sobre</li></Link>
                <Link to="skills" smooth={true} duration={1000}><li>Skills</li></Link>
                <Link to="projetos" smooth={true} duration={1000}><li>Projetos</li></Link>
                <Link to="contato" smooth={true} duration={1000}><li>Contato</li></Link>
            </ul>
        </Navigation>
    )
}

export default Header