import { Routes,Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoutes";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={
                <PrivateRoute>
                     <HomePage />
                </PrivateRoute>
            } />
            <Route path="/login" element={<LoginPage />}/>
        </Routes>
    )
}

export default AllRoutes;