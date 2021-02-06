import React from 'react'

import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3Full, DiNodejs} from 'react-icons/di'
import {SiJavascript, SiMysql, SiPostgresql} from 'react-icons/si'
import {FaReact, FaPython} from 'react-icons/fa'

import {Container, Icons, Icon} from './styles'

function Skills() {
    return(
        <Container id="skills" >
            <h1>Skills</h1>
            <Icons>
            
                <Icon>
                    <span>Html</span>
                    <AiFillHtml5 size={60} color="#fa8231"/>
               </Icon>
               <Icon>
                    <span>Css</span>
                    <DiCss3Full size={60} color="#1B9CFC"/>
               </Icon>
               <Icon>
                    <span>Javascript</span>
                    <SiJavascript size={60} color="#f9ca24"/>
               </Icon>
               <Icon>
                    <span>ReactJs</span>
                    <FaReact size={60} color="#3867d6"/>
               </Icon>
               <Icon>
                    <span>NodeJS</span>
                    <DiNodejs size={60} color="#20bf6b"/>
               </Icon>
               <Icon>
                    <span>Python</span>
                    <FaPython size={60} color="#227093"/>
               </Icon>
               <Icon>
                    <span>MySQL</span>
                    <SiMysql size={60} color="#3867d6"/>
               </Icon>
               <Icon>
                    <span>PostgresSQL</span>
                    <SiPostgresql size={60} color="#227093"/>
               </Icon>
            </Icons>
        </Container>
    )
}

export default Skills