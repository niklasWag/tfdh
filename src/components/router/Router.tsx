import { Route, Routes } from "react-router-dom";
import { NotFound } from "../notFound/NotFound";
import { Home } from "../../pages/home/Home";
import { Demo } from "../../pages/demo/Demo";
import { VoidFragments } from "../../pages/farming/VoidFragments";
import { Combat } from "../../pages/info/Combat";

export function Router() {
    return (
        <Routes>
            <Route  path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            {/* Info */}
            <Route path="/info/combat" element={<Combat />} />
            {/* World */}
            {/* Descendants */}
            {/* Farming */}
            <Route path='/farming' element={<Demo />} />
            <Route path='/farming/voidFragments' element={<VoidFragments />} />
        </Routes>
    )
}