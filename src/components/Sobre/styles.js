import styled from 'styled-components'

export const Container = styled.div`
    background-color: #d1d8e0;
    display: flex;
    width: 100%;
    height: 80vh;

    @media (max-width: 1440px) {
        width: 100%;
        height: 70vh;
        margin: 0 auto;
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 80vh;
    }

    @media (max-width: 800px) {
        width: 100%;
        height: 70vh;
    }

    @media (max-width: 375px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`

export const Profile = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 200px;
    margin-top: 100px;
    img {
        height: 350px;
        width: 350px;
        border-radius: 50%;
        border: 4px solid white;
    }

    h1 {
        font-size: 30px;
        margin-top: 30px;
    }

    @media (max-width: 1440px) {
        width: 40%;
        margin: 0 auto;
        margin-top: 7rem;

        img {
            height: 10rem;
            width: 10rem;
            border-radius: 50%;
        }

        h1 {
            font-size: 1.5rem;
        }

        @media (max-width: 800px) {
        width: 40%;
    }

    @media (max-width: 800px) {
        margin-top: 3rem;

        img {
            height: 7rem;
            width: 7rem;
            border-radius: 50%;
        }

        h1 {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 375px) {
        img {
            height: 5rem;
            width: 5rem;
        }

        h1 {
            font-size: 0.8rem;
        }
    }

}
`

export const About = styled.div`
    width: 60%;
    margin-top: 100px;
    color: #000;

    h1 {
        font-size: 40px;
        margin-top: 40px;
    }

    h3 {
        font-size: 30px;
        margin-top: 40px;
    }
    
    p {
        font-size: 25px;
        width: 600px;
        margin-top: 40px;
    }

    @media (max-width: 1440px) {
        width: 60%;
        margin:0 auto;
        margin-top: 7rem;

        h1 {
            font-size: 1.7rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1.2rem;
        }

        @media (max-width: 800px) {
        width: 50%;

        p {
            font-size: 1rem;
            width: 20rem;
        }
    }

    @media (max-width: 800px) {
        margin-top: 1rem;

        h1 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.2rem;
            margin-top: 1rem;
        }

        p {
            font-size: 1rem;
            margin-top: 1.2rem;
        }
    }

    @media (max-width: 375px) {
        width: 100%;
        margin-left: 2rem;

        h1 {
            font-size: 1.2rem;
        }

        h3 {
            font-size: 1rem;
        }

        p {
            font-size: .8rem;
        }
    }
}
`

export const Icons = styled.div`
    margin-top: 50px;

    a {
        padding: 10px;
        text-decoration: none;

        &:hover {
            border-bottom: 1px solid black;
        }
    }

    @media (max-width: 800px) {
        margin-top: 1.5rem;
    }

    @media (max-width: 375px) {
        width: 10rem;
        
    }
`