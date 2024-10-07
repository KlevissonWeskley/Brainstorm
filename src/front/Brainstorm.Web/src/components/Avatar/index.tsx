import { AvatarContainer } from './styles'
import { useEffect, useState } from 'react'

interface AvatarProps {
    username: string | null
}

export function Avatar({ username }: AvatarProps) {
    const [backgroundColor, setBackgroundColor] = useState('')
    
    function getRandomColor() {
        const colors = ['#FFD709', '#5B409B', '#00B37E', '#F75A68','#81E676', '#B5B20E', '#BD2ADE', '#0242CF', '#55DC48', '#21566F']        
        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex]
    }

    useEffect(() => {
        if (username) {
            const savedColor = localStorage.getItem(`avatarColor-${username}`)

            if (savedColor) {
                setBackgroundColor(savedColor)
            } else {
                const newColor = getRandomColor()
                setBackgroundColor(newColor)
                localStorage.setItem(`avatarColor-${username}`, newColor)
            }
        }
    }, [username]) 

    return (
        <AvatarContainer style={{ backgroundColor }}>
            {username ? username[0].toUpperCase() : null}
        </AvatarContainer>
    )
}
