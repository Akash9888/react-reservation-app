import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import List from "../src/Pages/LIst/List";
import Hotel from "../src/Pages/Hotel/Hotel";
import NotFound from "../src/Pages/NotFound/NotFound";
import { SearchContext } from "../src/Context/SearchContext";
import { useEffect, useState } from "react";

function App() {
    const [persons, setPersons] = useState({});
    const [updatePersons, setUpdatePersons] = useState(false);
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("personsList"))) {
            localStorage.setItem(
                "personsList",
                JSON.stringify({ adult: 1, children: 0, room: 0 })
            );
            setPersons({ adult: 1, children: 0, room: 0 });
        } else {
            setPersons(JSON.parse(localStorage.getItem("personsList")));
        }
    }, [updatePersons]);

    return (
        <div className="App">
            <SearchContext.Provider
                value={{
                    persons,
                    setPersons,
                    updatePersons,
                    setUpdatePersons,
                }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/hotel/:id" element={<Hotel />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
