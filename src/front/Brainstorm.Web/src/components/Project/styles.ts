import styled from "styled-components"

export const ProjectsContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;

    .projectContent {
        width: 100%;
        height: 4rem;
        background-color: ${props => props.theme['gray-600']};
        padding: 1.5rem;
    }

    .projectFooter {
        width: 100%;
        background-color: ${props => props.theme['gray-500']};
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 1.5rem;
    }
`

export const Avatar = styled.div`
    box-sizing: initial;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${props => props.theme['purple-300']};
    outline: 3px solid ${props => props.theme['green-500']};  
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
` 

export const ProjectHeader = styled.header`
    width: 100%;
    background-color: ${props => props.theme['gray-500']};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;

    .userInfo {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .ratings {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`

export const RatingButton = styled.button`
    background: transparent;
    border: 0;
    color: ${props => props.theme['green-300']};
    font-weight: bold;
    cursor: pointer;
`