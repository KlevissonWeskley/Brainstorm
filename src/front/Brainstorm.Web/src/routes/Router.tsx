import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { ProtectedRoute } from "./ProtectedRoutes";
import { Feed } from "../pages/Feed";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route 
                path="/feed" 
                element={
                    <ProtectedRoute>
                        <Feed />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}