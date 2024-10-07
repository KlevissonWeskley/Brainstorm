import styled from 'styled-components'

export const HeaderMobileContainer = styled.header`
    width: 100vw;
    height: 5rem;
    background-color: ${props => props.theme['gray-500']};

    @media (max-width: 768px) {
        .headerMobileContent {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
        }

        .headerMobileContent div {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }
`

export const ButtonNewIdeaMobile = styled.button`
    background-color: ${props => props.theme['purple-300']};
    width: 8rem;
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