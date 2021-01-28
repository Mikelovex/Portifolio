import styled from 'styled-components'

export const Navigation = styled.nav`
   display: flex;
   justify-content: space-around;
   width: 70%;
   margin: 0 auto;
   margin-top: 3%;
   margin-left: 20%;

   ul {
       display: flex;
       justify-content: space-between;
       width: 35%;
   }
   li {
       list-style: none;
       font-size: 120%;
       color: black;
       
       &:hover{
        font-weight: bold;
    }
   }

   img {
       margin-right: 4%;
   }


   @media (max-width: 1440px) {
       width: 80%;
       margin: 0 auto;
       margin-top: 4%;
   }

   @media (max-width: 800px) {
      width: 80%;
      margin: 0 auto;
      margin-top: 2rem;
      font-size: 0.8rem;
      img {
          width: 7rem;
          margin-left: 2rem;
      }

      ul {
          width: 20rem;
          margin-left: 4rem;
      }

      li {
          margin-left: 2rem;
      }
    }

    @media (max-width: 375px) {
        width: 80%;
        margin: 0 auto;
        margin-top:2rem;

        img {
            width: 4rem;
            margin-left: 0.5rem;

        }

        ul {
            width: 20rem;
            margin: 0;

        }

        li {
            margin: 0;
        }
    }

`