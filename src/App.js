import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import List from "../src/Pages/LIst/List";
import Hotel from "../src/Pages/Hotel/Hotel";
import NotFound from "../src/Pages/NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/hotel/:id" element={<Hotel />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
