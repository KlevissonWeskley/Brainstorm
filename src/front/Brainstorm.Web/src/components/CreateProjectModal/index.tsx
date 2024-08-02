import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay } from "./styles"
import { X } from "phosphor-react"
import { FormEvent, useState } from "react"
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { api } from "../../services/api";
import loadingGif from "../../assets/loading.gif"

export function CreateProjectModal() {
    const [content, setContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    async function createProject() {
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

    async function handleExecute(e: FormEvent) {
        e.preventDefault()
        setIsLoading(true)

        try {
            await createProject()
        } finally {
            setIsLoading(false)
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

                <form onSubmit={handleExecute}>
                    <input 
                        type="text" 
                        placeholder='Conteúdo' 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />

                    <button type='submit' className={isLoading ? 'loading' : ''}>
                        {isLoading ? <img className="loadingGif" src={loadingGif} alt="Loading..." /> : 'Enviar'}
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}