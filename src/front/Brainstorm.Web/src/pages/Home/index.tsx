import { FormEvent, useState } from 'react'
import { AccountModal } from '../../components/AccountModal'
import { useAuth } from '../../context/AuthContext'
import { ButtonCreateAccount, ButtonLogin, HeaderContent, HomePageContainer } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function Home() {
    const { login, signUp } = useAuth()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <HomePageContainer>
            <HeaderContent>
                <strong>Brainstorm</strong>
                <p>Compartilhe suas ideias e melhore nossa escola!</p>
            </HeaderContent>

            <main>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <ButtonLogin>Fazer login</ButtonLogin>
                    </Dialog.Trigger>

                    <AccountModal
                        title="Fazer login"
                        execute={async (e: FormEvent) => {
                            e.preventDefault()

                            await login({
                                username,
                                password
                            })
                        }}
                        buttonFunction="Entrar"
                        username={username}
                        setUsername={setUsername}
                        password={password}
                        setPassword={setPassword}
                    />
                </Dialog.Root>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <ButtonCreateAccount>Criar uma conta</ButtonCreateAccount>
                    </Dialog.Trigger>
                    
                    <AccountModal
                        title="Criar conta"
                        execute={async (e) => {
                        e.preventDefault();
                        await signUp({
                            username,
                            password,
                        });
                        }}
                        buttonFunction="Criar"
                        username={username}
                        setUsername={setUsername}
                        password={password}
                        setPassword={setPassword}
                    />
                </Dialog.Root>
            </main>
        </HomePageContainer>
    )
}