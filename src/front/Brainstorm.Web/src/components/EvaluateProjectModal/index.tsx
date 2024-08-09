import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, SendRatingButton } from './styles'
import { X } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'
import Cookies from 'js-cookie'
import Rating from '@mui/material/Rating'
import loadingGif from "../../assets/loading.gif"

interface ICreateRating {
    studentId: string | undefined
    projectId: number
}

export function EvaluateProjectModal({ studentId, projectId }: ICreateRating) {
    const [rating, setRating] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    async function createRating() {
        const token = Cookies.get('token')

        try {
            await api.post(`/projects/rating`, { 
                value: rating,
                studentId,
                projectId
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            window.location.reload()
        } catch (error) {
            console.error('Error creating rating:', error)
        }
    }

    async function handleExecute(e: FormEvent) {
        e.preventDefault()
        setIsLoading(true)

        try {
            await createRating()
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Avalie essa ideia</Dialog.Title>
                
                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleExecute}>
                    <span>
                        <Rating 
                            name="half-rating" 
                            defaultValue={0} 
                            precision={0.5}
                            onChange={(_, newValue) => setRating(newValue || 0)}
                        />    
                    </span>
             
                    <SendRatingButton type='submit' className={isLoading ? 'loading' : ''}>
                    {isLoading ? <img className="loadingGif" src={loadingGif} alt="Loading..." /> : 'Enviar avaliação'}
                    </SendRatingButton>
                </form>
            </Content>
        </Dialog.Portal>
    )
}