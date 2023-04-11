import styled from 'styled-components';

export const Container = styled.div`
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
export const NameGame = styled.h1`
    margin: 2vw;
    text-transform:uppercase;
    color: crimson;
    font-size: 6vw;
    `;


export const ContainerPlayers = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    `;

export const ButtonGo = styled.button`
        font-size: 2.5vw;
        padding: 1vw;
        border-radius: 1vw;
        background-color:orangered;
        color: white;
        text-transform:uppercase;
        `;
