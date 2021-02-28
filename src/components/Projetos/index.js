import React from 'react'

import {Container, Cards, Card} from './styles'

import hotelImg from '../../assets/hotel.png'
import beatImg from '../../assets/beat.png'
import pokemonImg from '../../assets/pokemon.png'
import gitfinderImg from '../../assets/ginfinder.png'

function Projetos() {


    return(
       <Container id="projetos">
           <h1>Projetos</h1>
           <Cards>
               <Card href="https://layout-hotel.vercel.app/" target="blank">
                    <h2>Layout Hotel</h2>
                    <img src={hotelImg} alt="ecoleta"/>
                    <p>Um site para um hotel fictício</p>
               </Card>
               <Card href="https://beat-maker.vercel.app/" target="blank">
                    <h2>Beat Maker</h2>
                    <img src={beatImg} alt="beat-maker"/>
                    <p>aplicação para fazer beats para musicas</p>
               </Card>
               <Card href="https://pokemon-two-phi.vercel.app/" target="blank">
                    <h2>Pokedex</h2>
                    <img src={pokemonImg} alt="pokedex"/>
                    <p>Um CRUD de pokemon, onde é possivel adicionar novos pokemons.</p>
               </Card>
               <Card href="https://gitfinder-wine.vercel.app/" target="blank">
                    <h2>Github Finder</h2>
                    <img src={gitfinderImg} alt="twitter-interface"/>
                    <p>uma aplicação para encontrar usuários do github</p>
               </Card>
           </Cards>
       </Container>
    )
}

export default Projetos