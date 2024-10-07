import styled from 'styled-components'

export const AvatarContainer = styled.div`
    box-sizing: initial;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    outline: 3px solid ${props => props.theme['green-500']};  
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
`