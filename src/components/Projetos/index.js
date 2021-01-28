import React from 'react'

import {Container, Cards, Card} from './styles'

import ecoletaImg from '../../assets/ecoleta.png'
import beatImg from '../../assets/beat.png'
import pokemonImg from '../../assets/pokemon.png'
import twitterImg from '../../assets/twitter.png'

function Projetos() {


    return(
       <Container id="projetos">
           <h1>Projetos</h1>
           <Cards>
               <Card href="https://github.com/Mikelovex/Ecoleta" target="blank">
                    <h2>Ecoleta</h2>
                    <img src={ecoletaImg} alt="ecoleta"/>
                    <p>Um marketplace de coleta de resíduos.</p>
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
               <Card href="https://github.com/Mikelovex/Twitter-interface-clone" target="blank">
                    <h2>Twitter Interface</h2>
                    <img src={twitterImg} alt="twitter-interface"/>
                    <p>Clone da interface do Twitter</p>
               </Card>
           </Cards>
       </Container>
    )
}

export default Projetos