import { SignOut } from 'phosphor-react'
import { useAuth } from '../../context/AuthContext'
import { HeaderMobileContainer, ButtonNewIdeaMobile } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateProjectModal } from '../CreateProjectModal'

export function HeaderMobile() {
    const { username, logout } = useAuth()

    return (
        <HeaderMobileContainer>
            <div className='headerMobileContent'>
                <span>Olá, {username}</span>

                <div>
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <ButtonNewIdeaMobile>Enviar ideia</ButtonNewIdeaMobile>
                        </Dialog.Trigger>

                        <CreateProjectModal />
                    </Dialog.Root>

                    <SignOut size={30} onClick={logout} />
                </div>
            </div>
        </HeaderMobileContainer>
    )
}