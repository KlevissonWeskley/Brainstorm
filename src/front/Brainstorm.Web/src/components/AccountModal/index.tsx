import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay } from "./styles"
import { X } from "phosphor-react"
import { FormEvent } from "react";

interface AccountModalProps {
    title: string;
    execute: (e: FormEvent) => void;
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

                <form onSubmit={execute}>
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

                    <button type='submit'>{buttonFunction}</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}