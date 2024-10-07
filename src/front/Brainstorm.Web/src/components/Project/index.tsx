import { DeleteProjectButton, ProjectContent, ProjectHeader, ProjectsContainer, RatingButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { EvaluateProjectModal } from "../EvaluateProjectModal";
import { useEffect, useState } from "react";
import { IProjectProps } from "../../interfaces/IProjectProps";
import { api } from "../../services/api";
import { Trash } from "phosphor-react";
import { DeleteProjectModal } from "../DeleteProjectModal";
import Rating from '@mui/material/Rating'
import { Avatar } from "../Avatar";

interface ProjectDataProps {
    projectId: number
    username: string
    ratings: [
        { id: number, value: number }
    ]
    content: string
}

export function Project({ projectId, username, ratings, content }: ProjectDataProps) {
    const [project, setProject] = useState<IProjectProps>()
    
    const averageRating = (ratings.reduce((sum, rating) => sum + rating.value, 0) / ratings.length).toFixed(1)

    const token = Cookies.get('token')
    const tokenDecoded = token ? jwtDecode(token) : null
    const studentId = tokenDecoded?.sub

    async function getProjects() {
        try {
            const reply = await api.get(`/projects/${projectId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setProject(reply.data)
        } catch (err) {
            console.log("Erro ao buscar projetos: ", err)
        }
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <ProjectsContainer>
            <ProjectContent>
                <ProjectHeader>
                    <div className="userInfo">
                        <Avatar username={username} />

                        <span>{username}</span>
                    </div>

                    <div className="ratings">
                        <span>
                            <strong>Avaliações:</strong> {ratings.length}
                        </span>
                        <span className="averageRating">
                            <span>
                                <strong>Média:</strong> {ratings.length <= 0 ? '0' : `${averageRating}`} 
                            </span>
                            <Rating className="ratingStars" name="half-rating-read" defaultValue={parseFloat(averageRating)} precision={0.5} readOnly />
                        </span>
                    </div>
                </ProjectHeader>

                <section className="projectContent">{content}</section>

                {studentId !== project?.student.id ? (
                    <footer className="projectFooter">
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <RatingButton>Avaliar projeto</RatingButton>
                            </Dialog.Trigger>

                            <EvaluateProjectModal 
                                studentId={studentId}
                                projectId={projectId}
                            />
                        </Dialog.Root>
                    </footer>
                ) : (
                    <footer className="projectFooter">
                        <Dialog.Root>
                            <DeleteProjectButton>
                                <Trash size={24}/>
                            </DeleteProjectButton>

                            <DeleteProjectModal projectId={projectId}/>
                        </Dialog.Root>
                    </footer>
                )}
            </ProjectContent>
        </ProjectsContainer>
    )
}