import styled from 'styled-components'

import {shade} from 'polished'

export const Container = styled.div`
    display: flex;
    height: 100%;
    color: black;
    width: 70%;
    margin: 0 auto;
    margin-top: 15rem;
    margin-bottom: 6rem;

    @media (max-width: 1440px) {
        width: 80%;
    }

    @media (max-width: 1024px) {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        margin-top: 5rem;
    }

    @media (max-width: 800px) {
      width: 80%;
      margin: 0 auto;
      margin-top: 4rem;
      margin-right: 7rem;
    }

    @media (max-width: 375px) {
        width: 80%;
        margin: 0 auto;
        margin-top: 1rem;
    }

`

export const Description = styled.div`
    width: 65%;
    display: flex;
    padding-left: 6rem;

    @media (max-width: 375px) {
            display: none;
    }

`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 32rem;
    height: 32rem; 

    h3 {
        font-size: 1.5rem;
    }

    h1 {
        margin-top: 1.5rem;
        font-size: 3rem;
    }
    
    p {
        margin-top: 3.2rem;
        font-size: 1.4rem;
        width: 36rem;
    }

    button {
        border: 2px solid black;
        border-radius: 3px;
        height: 3.2rem;
        width: 18rem;
        margin-top: 2rem;
        color: black;
        background-color: transparent;
        font-size: 1.2rem;
        font-weight: 500;
        transition: 0.2s;

        &:hover {
            background: ${shade(0.25, '#ecf0f1')}
        }
    }

    @media (max-width: 1024px) {
        width: 20rem;
        height: 20rem;

        h1 {
            font-size: 1.6rem;
        }

        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 1rem;
            width: 25rem;
            margin-top: 1.5rem;
        }

        button {
            height: 2rem;
            width: 14rem;
            font-size: 1rem;
        }

        @media (max-width: 800px) {
           width: 16rem;
           height:16rem;
           h1 {
               font-size: 1.2rem;
           }

           h3 {
               font-size: 0.8rem;
           }

           p {
               font-size: 0.8rem;
               width: 16rem;
           }

           button {
               height: 1.6rem;
               width: 10rem;
               font-size: 0.8rem;
               margin-top: 1rem;
           }
        }
       
    }
    
    
`

export const Image = styled.div`
    width: 35%;

    img {
        height: 22rem;
    }

    @media (max-width: 1024px) {
        img {
            height: 16rem;
        }
    }

    @media (max-width: 800px) {
        img {
            height: 12rem;
        }
    }

    @media (max-width: 375px) {
        img {
         margin-left: 3rem;
        }
    }

`