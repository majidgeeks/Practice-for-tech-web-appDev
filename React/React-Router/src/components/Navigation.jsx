import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";


const Navigation = () => {
    return(
        <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
         </Routes>
        </BrowserRouter>
        
        </>
    )
};

export default Navigation;