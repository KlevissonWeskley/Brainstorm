import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"

export const ProjectsContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 768px) {
        width: 92vw;
    }
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

    @media (max-width: 768px) {
        .userInfo span {
            font-size: 12px;
        }

        .ratings span {
            font-size: 12px;
        }
    }
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

    .averageRating {
        display: flex;
        flex-direction: column;
    }
`

export const RatingButton = styled.button`
    background: transparent;
    border: 0;
    color: ${props => props.theme['green-300']};
    font-weight: bold;
    cursor: pointer;
`

export const DeleteProjectButton = styled(Dialog.Trigger)`
    background: transparent;
    border: 0;
    color: ${props => props.theme['red-300']};
    cursor: pointer;
`