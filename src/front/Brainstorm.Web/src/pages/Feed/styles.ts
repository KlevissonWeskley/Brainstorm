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

`

export const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`