import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30rem;

    p {
        margin-top: 40px;
        font-size: 20px;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 1.4rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
    @media (max-width: 800px) {
      p {
          font-size: 1rem;
      }
    }

    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;

        h1 {
            font-size: 1rem;
            margin-top: 0;
        }

        p {
            font-size: 1rem;
            width: 20rem;
        }
    }
`

export const Icons = styled.div`
    margin-top: 100px;
    display: flex;
    span {
        padding: 20px;
        display: flex;
        flex-direction: row;
    }

    strong {
        margin-left: 10px;
        font-size: 18px;
    }

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-left: 10rem;
        span {
            padding: 1.2rem;
        }

        strong {
            margin-left: 0.5rem;
            font-size: 1.1rem;
        }

        @media (max-width: 800px) {
            margin-right: 10rem;
            margin-top: 1rem;
            span {
                padding: 0.8rem;
                margin-top: 2rem;
                margin-left: 4rem;
            }

            strong {
                font-size: 1rem;
                margin-left: 0.2rem;
            }
        }
    
    }

    @media (max-width: 375px) {
        display: grid;
        grid-template-columns: 1fr;
        margin-left: 6rem;
    }


`