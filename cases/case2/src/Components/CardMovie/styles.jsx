import styled from "styled-components";

export const Card = styled.div`
    width: 9.375rem;
    height: 18.75rem;
    margin: auto; 
    display: flex;
    flex-direction: column;
    white-space: normal;
    cursor: pointer;
`;

export const TitleMovie = styled.strong`
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`;

export const DateMovie = styled.p`
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: bold;
    color: gray;
`;