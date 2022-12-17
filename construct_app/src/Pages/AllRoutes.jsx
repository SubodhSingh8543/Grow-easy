import { Routes,Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />}/>
        </Routes>
    )
}

export default AllRoutes;