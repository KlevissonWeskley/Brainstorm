import styled from 'styled-components'

export const HomePageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #202024;
    color: #F3F4FE;

    strong {
        color: #8860E6;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
`

export const HeaderContent = styled.header`
    text-align: center;

    strong {
        font-size: 1.5rem;
    }
`

const BaseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 3rem;
`

export const ButtonLogin = styled(BaseButton)`
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    background: #8860E6;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

    &:hover:not(:disabled) {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

export const ButtonCreateAccount = styled(BaseButton)`
    background: transparent;
    color: #8860E6;
    border: 1px solid #8860E6;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        opacity: 0.8;
    }
`