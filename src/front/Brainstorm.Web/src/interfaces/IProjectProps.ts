export interface IProjectProps {
    id: number
    content: string
    student: { id: string, username: string }
    ratings: [
        { id: number, value: number }
    ]
    createdAt: Date
}