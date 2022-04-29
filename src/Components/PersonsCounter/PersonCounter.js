import React, { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";

const PersonCounter = () => {
    const { persons, updatePersons, setUpdatePersons } =
        useContext(SearchContext);
    console.log(persons);

    const updateFunc = (type, sign) => {
        if (type === "adult") {
            sign === "plus"
                ? (persons.adult = persons.adult + 1)
                : (persons.adult = persons.adult - 1);
        } else if (type === "child") {
            sign === "plus"
                ? (persons.children = persons.children + 1)
                : (persons.children = persons.children - 1);
        } else if (type === "room") {
            sign === "plus"
                ? (persons.room = persons.room + 1)
                : (persons.room = persons.room - 1);
        }
        localStorage.setItem("personsList", JSON.stringify(persons));
        setUpdatePersons(!updatePersons);
    };
    return (
        <div className="absolute bg-gray-200 rounded-md  shadow-lg p-2 top-[40px] w-full left-0">
            <div className="flex items-center justify-between p-2">
                <h4>Adult:</h4>
                <div>
                    <button
                        className="border border-sky-500 rounded-full  px-2 "
                        disabled={persons.adult == 1 ? true : false}
                        onClick={() => {
                            updateFunc("adult", "minus");
                        }}>
                        -
                    </button>
                    <span className="mx-1"> {persons.adult} </span>
                    <button
                        className="border border-sky-500 rounded-full px-2"
                        onClick={() => {
                            updateFunc("adult", "plus");
                        }}>
                        +
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between p-2">
                <h4>Children:</h4>
                <div>
                    <button
                        className="border border-sky-500 rounded-full  px-2"
                        disabled={persons.children == 0 ? true : false}
                        onClick={() => {
                            updateFunc("child", "minus");
                        }}>
                        -
                    </button>
                    <span className="mx-1"> {persons.children} </span>
                    <button
                        className="border border-sky-500 rounded-full px-2"
                        onClick={() => {
                            updateFunc("child", "plus");
                        }}>
                        +
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between p-2">
                <h4>Room:</h4>
                <div>
                    <button
                        className="border border-sky-500 rounded-full  px-2 "
                        disabled={persons.room == 0 ? true : false}
                        onClick={() => {
                            updateFunc("room", "minus");
                        }}>
                        -
                    </button>
                    <span className="mx-1"> {persons.room} </span>
                    <button
                        className="border border-sky-500 rounded-full px-2"
                        onClick={() => {
                            updateFunc("room", "plus");
                        }}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PersonCounter;
