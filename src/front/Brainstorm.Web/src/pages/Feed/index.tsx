import { useEffect, useState } from "react";
import { ProfileSidebar } from "../../components/ProfileSidebar";
import { SidebarContainer } from "../../components/ProfileSidebar/styles";
import { FeedPageContainer } from "./styles";
import { IProjectProps } from "../../interfaces/IProjectProps";
import { api } from "../../services/api";
import { Project } from "../../components/Project";
import { HeaderMobile } from "../../components/HeaderMobile";

export function Feed() {
    const [projects, setProjects] = useState<IProjectProps[]>([]);
    const [isMobile, setIsMobile] = useState(false)

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

        const checkMobileScreen = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobileScreen()

        window.addEventListener('resize', checkMobileScreen)

        return () => window.removeEventListener('resize', checkMobileScreen)
    }, [])

    return (
        <FeedPageContainer>
            {
                isMobile ? (
                    <HeaderMobile />
                ) : (
                    <SidebarContainer>
                        <ProfileSidebar />
                    </SidebarContainer>
                )
            }

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