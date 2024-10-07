import * as Dialog from '@radix-ui/react-dialog'
import { useAuth } from '../../context/AuthContext'
import { 
    ButtonLogout, 
    ButtonNewIdea,
    Cover, 
    Profile, 
    SidebarContainer 
} from './styles'

import { SignOut } from 'phosphor-react'
import { CreateProjectModal } from '../CreateProjectModal'
import { Avatar } from '../Avatar'

export function ProfileSidebar() {
    const { logout, username } = useAuth()

    return (
        <SidebarContainer>
            <Cover></Cover>

            <Profile>
                <Avatar username={username} />
                <strong>{username}</strong>
            </Profile>

            <footer>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <ButtonNewIdea>Enviar ideia</ButtonNewIdea>
                    </Dialog.Trigger>

                    <CreateProjectModal />
                </Dialog.Root>
                
                <ButtonLogout onClick={logout}><SignOut size={24}/> Sair</ButtonLogout>
            </footer>
        </SidebarContainer>
    )
}