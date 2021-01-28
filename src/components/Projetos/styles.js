import styled from 'styled-components'

export const Container = styled.div`
    background-color: #d1d8e0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    h1 {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1440px) {
        height: 80vh;
        width: 100%;
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 70vh;
        margin: 0 auto;

        h1 {
            font-size: 1.5rem;
            margin-top: 3rem;
        }
    }

    @media (max-width: 800px) {
        width: 100%;
        height: 80vh;
    }

    @media (max-width: 375px) {
        height: 180vh;

        h1 {
            margin-top: 1rem;
        }
    }
`

export const Cards = styled.div`
    width: 70%;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    justify-content: space-around;

    @media (max-width: 1440px) {
        height: 100vh;
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 100vh;
        margin: 0 auto;
    }

    @media (max-width: 375px) {
        display: grid;
        grid-template-columns: 1fr;
        margin-left: 3rem;
    }

`
export const Card = styled.a`
    height: 400px;
    width: 320px;
    background-color: #f1f2f6;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #353b48;
    text-decoration: none;

    img {
        height: 200px;
        width: 300px;
        padding: 25px 20px 0px 20px;
    }

    h2 {
        margin-top: 20px;
    }
    
    p {
        margin-top: 20px;
        max-width: 250px;
        font-size: 19px;
    }

    transition: 0.5s;

    &:hover {
        transform: scaleY(1.06) scaleX(1.06);

    }

   

    @media (max-width: 1440px) {
        height: 24rem;
        width: 20rem;
        margin-left: 10px;
        display: flex;
        align-items: center;
        
        img {
            height: 12rem;
            width: 18rem;
        }

        h2 {
            font-size: 1.2rem;
        }

        p {
            font-size: 1rem;
            text-align: center;
        }

        @media (max-width: 1024px) {
        height: 18rem;
        width: 13rem;
        margin-top: 4rem;

        img {
            height: 8rem;
            width: 14rem;
        }

        @media (max-width: 800px) {
            width: 11rem;
            height: 18rem;
            h2 {
                font-size: 1rem;
            }
            img {
                width: 10rem;
                height: 8rem;
            }
        }

        @media (max-width: 768px) {
            margin-right: 0.8rem;
        }
    }

    @media (max-width: 375px) {
        width: 16rem;
        height: 16rem;

        h2 {
            font-size: 1rem;
            margin-top: 0.5rem;
        }
    }

}

`