import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay, Title } from "./styles"
import { X } from "phosphor-react"
import { FormEvent, useState } from "react"
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { api } from "../../services/api";
import loadingGif from "../../assets/loading.gif"

export function CreateProjectModal() {
    const [content, setContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const CONTENT_MIN_LENGTH = 5
    const CONTENT_MAX_LENGTH = 250

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

            window.location.reload()
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
                <Title>Compartilhe seu projeto</Title>
                
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

                    <button 
                        type='submit' 
                        className={isLoading ? 'loading' : ''} 
                        disabled={content.length < CONTENT_MIN_LENGTH || content.length > CONTENT_MAX_LENGTH}
                    >
                        {isLoading ? <img className="loadingGif" src={loadingGif} alt="Loading..." /> : 'Enviar'}
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}