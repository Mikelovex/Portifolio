import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30rem;

    @media (max-width: 800px) {
        width: 100%;
        height: 70vh;
        
        h1 {
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    }
`

export const Icons = styled.div`
    margin-top: 100px;
    display: flex;
    

    span {
        padding: 20px;
    }

    @media (max-width: 800px) {
       margin-top: 3rem;
       margin-right: 3rem;
    }

    @media (max-width: 1024px) {
        margin-right: 2.2rem;
    }

    @media (max-width: 375px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
    height: 170px;
    margin-left: 50px;
    font-weight: 550;

    span {
        font-size: 20px;
    }

    @media (max-width: 800px) {
       width: 2rem;

       span{
           font-size: 1rem;
       }
    }
`