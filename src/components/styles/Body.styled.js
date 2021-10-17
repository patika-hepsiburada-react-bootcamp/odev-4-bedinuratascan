import styled, { keyframes } from 'styled-components'

const Gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(-45deg, #3D56B2, #5C7AEA, #E6E6E6, #A2D2FF);
    background-size: 400% 400%;
    animation: ${Gradient} 15s ease infinite;
    height: 100vh;
`;

