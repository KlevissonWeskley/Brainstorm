import { useEffect, useState } from "react";
import { ProfileSidebar } from "../../components/ProfileSidebar";
import { SidebarContainer } from "../../components/ProfileSidebar/styles";
import { FeedPageContainer } from "./styles";
import { IProjectProps } from "../../interfaces/IProjectProps";
import { api } from "../../services/api";
import { Project } from "../../components/Project";

export function Feed() {
    const [projects, setProjects] = useState<IProjectProps[]>([]);

    async function loadProjects() {
        try {
            const reply = await api.get('/projects')

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
                            projectId={project.id}
                            username={project.student.username}
                            ratings={project.ratings}
                            content={project.content}
                        />
                    )
                }) : (
                    <p className="projectsNotFound">Nenhum projeto encontrado.</p>
                )} 
            </div>
        </FeedPageContainer>
    )
}