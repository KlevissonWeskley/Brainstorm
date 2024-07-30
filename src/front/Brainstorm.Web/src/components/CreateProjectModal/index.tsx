import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay } from "./styles"
import { X } from "phosphor-react"
import { FormEvent, useState } from "react"
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { api } from "../../services/api";

export function CreateProjectModal() {
    const [content, setContent] = useState('')

    async function createProject(e: FormEvent) {
        e.preventDefault()

        try {
            const token = Cookies.get('token')
            const tokenDecoded = token ? jwtDecode(token) : null
            const studentId = tokenDecoded?.sub
            
            await api.post('/projects', 
                {
                    content,
                    studentId
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
        } catch (err) {
            console.log('Create Project Erro: ', err)
        }
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Compartilhe seu projeto</Dialog.Title>
                
                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={createProject}>
                    <input 
                        type="text" 
                        placeholder='Conteúdo' 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />

                    <button type='submit'>Enviar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}