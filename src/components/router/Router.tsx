import { Route, Routes } from "react-router-dom";
import { NotFound } from "../notFound/NotFound";
import { Home } from "../../pages/home/Home";
import { Demo } from "../../pages/demo/Demo";

export function Router() {
    return (
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/demo' element={<Demo />} />
        </Routes>
    )
}