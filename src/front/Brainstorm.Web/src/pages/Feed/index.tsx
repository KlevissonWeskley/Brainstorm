import { useEffect, useState } from "react";
import { ProfileSidebar } from "../../components/ProfileSidebar";
import { SidebarContainer } from "../../components/ProfileSidebar/styles";
import { FeedPageContainer } from "./styles";
import { IProjectProps } from "../../interfaces/IProjectProps";
import Cookies from "js-cookie";
import { api } from "../../services/api";
import { Project } from "../../components/Project";

export function Feed() {
    const [projects, setProjects] = useState<IProjectProps[]>([]);

    const token = Cookies.get('token')

    async function loadProjects() {
        try {
            const reply = await api.get('/projects', 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setProjects(reply.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadProjects()
    }, [])

    return (
        <FeedPageContainer>
            <SidebarContainer>
                <ProfileSidebar />
            </SidebarContainer>

            <div className="projects">
                {projects.length > 0 ? projects.map(project => {
                    return (
                        <Project 
                            username={project.student.username}
                            ratings={project.ratings}
                            content={project.content}
                        />
                    )
                }) : (
                    <p>Nenhum projeto encontrado</p>
                )} 
            </div>
        </FeedPageContainer>
    )
}