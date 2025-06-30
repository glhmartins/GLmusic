import Layout from "./Layout";
import { createBrowserRouter } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import GuitarrasPage from "../pages/GuitarrasPage";
import Guitarras2Page from "../pages/Guitarras2Page";
import BaixosPage from "../pages/BaixosPage";
import PedaisPage from "../pages/PedaisPage";
import AmplificadoresPage from "../pages/AmplificadoresPage";
import FaqPage from "../pages/FaqPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "", element: <HomePage />},
            {path: "guitarras", element: <GuitarrasPage />},
            {path: "guitarras2", element: <Guitarras2Page />},
            {path: "baixos", element: <BaixosPage />},
            {path: "pedais", element: <PedaisPage />},
            {path: "amplificadores", element: <AmplificadoresPage />},
            {path: "faq", element: <FaqPage />}           
        ]
    }
]);
export default router;