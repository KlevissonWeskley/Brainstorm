export function NotFound() {
    return (
        <div
            style={
                {
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem"
                }
            }
        >
            <h1>404 Page Not Found</h1>
            <p>A página que você tentou acessar não foi encontrada.</p>
        </div>
    )
}