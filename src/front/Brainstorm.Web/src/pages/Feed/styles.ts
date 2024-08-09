import styled from 'styled-components'

export const FeedPageContainer = styled.div`
    max-width: 70rem;
    margin: 2rem auto;
    padding: 0 1rem;

    display: grid;
    grid-template-columns: 256px 1fr;
    gap: 10rem;
    align-items: flex-start;

    .projects {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .projectsNotFound {
        width: 100%;
        height: 4rem;
        background-color: ${props => props.theme['gray-500']};
        display: flex;
        align-items: center;
        padding-left: 1rem;
        border-radius: 6px;
    }
`

export const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`