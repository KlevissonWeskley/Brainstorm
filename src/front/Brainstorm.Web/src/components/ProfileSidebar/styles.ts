import styled from 'styled-components'

export const SidebarContainer = styled.div`
    background: ${props => props.theme['gray-600']};
    border-radius: 8px;
    overflow: hidden;

    .list-menu {
        position: absolute;
        color: ${props => props.theme['gray-700']};
        margin-top: -3.5rem;
        margin-left: 1rem;
        cursor: pointer;
    }

    footer {
        border-top: 1px solid ${props => props.theme['gray-400']};
        margin-top: 1.5rem;
        padding: 1.5rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const Cover = styled.div`
    width: 100%;
    height: 72px;
    object-fit: cover;
    background-color: ${props => props.theme['gray-300']};
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: -2rem;

    strong {
        margin-top: 1rem;
        color: ${props => props.theme['gray-100']};
        line-height: 1.6;
    }
`

const BaseButton = styled.button`
    width: 12rem;
    height: 3rem;
    border: 0;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    transition: .2s ease;

    &:hover {
        opacity: 0.7;
    }
`

export const ButtonNewIdea = styled(BaseButton)`
    background-color: ${props => props.theme['purple-300']};
`

export const ButtonLogout = styled(BaseButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background: transparent;
    color: ${props => props.theme['purple-500']};
    border: 1px solid ${props => props.theme['purple-300']};
`