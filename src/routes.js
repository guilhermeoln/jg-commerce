import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import SectionNav from "./Components/SectionNav";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Celulares from "./pages/Celulares";
import Product from "./pages/Product";
import Notebooks from "./pages/Notebooks";
import Hardwares from "./pages/Hardwares";
import Carrinho from "./pages/Carrinho";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
            <SectionNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/celulares" element={<Celulares />} />
                <Route path="/produto/:id" element={<Product />} />
                <Route path="/notebooks" element={<Notebooks />} />
                <Route path="/hardwares" element={<Hardwares />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}