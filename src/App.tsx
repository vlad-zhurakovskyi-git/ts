import React from 'react';
import {Routes, Route} from "react-router-dom";
import { ProductPage } from "./pages/ProductsPage";
import { LoremPage } from "./pages/LoremPage";
import { Navigation } from "./components/Navigation";

const App = () => (
    <>
        <Navigation />
        <Routes>
            <Route path='/' element={<ProductPage />} />
            <Route path='/lorem' element={<LoremPage />} />
        </Routes>
    </>
)

export default App;
