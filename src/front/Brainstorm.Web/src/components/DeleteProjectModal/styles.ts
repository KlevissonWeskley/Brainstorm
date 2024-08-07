import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${props => props.theme['gray-600']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
        margin: 0 auto;
        text-align: center;
        color: ${props => props.theme['gray-200']};
        font-size: 1rem;
        width: 15rem;
    }

    form {
        display: flex;
        align-items: center;
        justify-content: center;

        div {
            display: flex;
            gap: 1rem;
            align-items: center;
        }
}
`

export const CancelButton = styled(Dialog.Close)`
    width: 8.6rem;
    height: 58px;
    border: 0;
    background: transparent;
    border: 2px solid ${props => props.theme['gray-500']};
    color: ${props => props.theme['gray-100']};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;    
`

export const DeleteButton = styled.button`
    width: 8.6rem;
    height: 58px;
    border: 0;
    background: ${props => props.theme['gray-500']};
    color: ${props => props.theme['red-300']};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    
    &.loading {
        opacity: 0.7;
    }

    .loadingGif {
        width: 4rem;
    }
` 