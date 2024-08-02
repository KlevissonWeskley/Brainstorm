import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay } from "./styles"
import { X } from "phosphor-react"
import { FormEvent, useState } from "react";
import loadingGif from "../../assets/loading.gif"

interface AccountModalProps {
    title: string;
    execute: (e: FormEvent) => Promise<void>;
    buttonFunction: string;
    username: string;
    setUsername: (username: string) => void;
    password: string;
    setPassword: (password: string) => void;
}


export function AccountModal({
    title,
    execute,
    buttonFunction,
    username,
    setUsername,
    password,
    setPassword,
} : AccountModalProps) {
    const [isLoading, setIsLoading] = useState(false)

    async function handleExecute(e: FormEvent) {
        e.preventDefault()
        setIsLoading(true)

        try {
            await execute(e)
        } finally {
            setIsLoading(false)
        }
    }

    function clear() {
        setUsername('')
        setPassword('')
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>{title}</Dialog.Title>
                
                <CloseButton onClick={clear}>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleExecute}>
                    <input 
                        type="text" 
                        placeholder='Nome de usuário' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <input 
                        type="password" 
                        placeholder='Senha' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type='submit' className={isLoading ? 'loading' : ''}>
                        {isLoading ? <img className="loadingGif" src={loadingGif} alt="Loading..." /> : buttonFunction}
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}