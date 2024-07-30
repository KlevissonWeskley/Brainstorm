import { Avatar, ProjectContent, ProjectHeader, ProjectsContainer, RatingButton } from "./styles";

interface ProjectDataProps {
    username: string
    ratings: [
        { id: number, value: number }
    ]
    content: string
}

export function Project({ username, ratings, content }: ProjectDataProps) {
    const averageRating = ratings.length
    ? (ratings.reduce((sum, rating) => sum + rating.value, 0) / ratings.length).toFixed(1)
    : 0;

    return (
        <ProjectsContainer>
            <ProjectContent>
                <ProjectHeader>
                    <div className="userInfo">
                        <Avatar>{username[0].toUpperCase()}</Avatar>

                        <span>{username}</span>
                    </div>

                    <div className="ratings">
                        <span>Avalições: {ratings.length}</span>
                        <span>Média: {averageRating}</span>
                    </div>
                </ProjectHeader>

                <section className="projectContent">{content}</section>

                <footer className="projectFooter">
                    <RatingButton>Avaliar projeto</RatingButton>
                </footer>
            </ProjectContent>
        </ProjectsContainer>
    )
}