import styled from 'styled-components';

export const Container = styled.div`
    width:25vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;
export const ContainerChoice = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    `;
export const ImageChoice = styled.img`
    width: 5vw;
    height: 5vw;
    transition-duration: 0.5s;
    :hover{
        width: 10vw;
        height: 10vw;
    }
    `;