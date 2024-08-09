import * as Dialog from '@radix-ui/react-dialog'
import { CancelButton, Content, DeleteButton, Overlay } from './styles'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'
import Cookies from 'js-cookie'
import loadingGif from "../../assets/loading.gif"

interface IDeleteProject {
    projectId: number
}

export function DeleteProjectModal({ projectId }: IDeleteProject) {
    const [isLoading, setIsLoading] = useState(false)

    async function deleteProject() {
        const token = Cookies.get('token')

        try {
            await api.delete(`/projects/${projectId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            window.location.reload()
        } catch (error) {
            console.log('Error delete project:', error)
        }
    }

    async function handleExecute(e: FormEvent) {
        e.preventDefault()
        setIsLoading(true)

        try {
            await deleteProject()
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Excluir projeto</Dialog.Title>
                <p>Você tem certeza que gostaria de excluir este projeto?</p>

                <form onSubmit={handleExecute}>
                    <div>
                        <CancelButton>Cancelar</CancelButton>

                        <DeleteButton type='submit' className={isLoading ? 'loading' : ''}>
                            {isLoading ? <img className="loadingGif" src={loadingGif} alt="Loading..." /> : 'Sim, excluir'}
                        </DeleteButton>
                    </div>
                </form>
            </Content>
        </Dialog.Portal>
    )
}