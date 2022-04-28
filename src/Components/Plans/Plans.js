import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    faBed,
    faCalendarDays,
    faCar,
    faCaravan,
    faDungeon,
    faPeopleGroup,
    faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import PersonCounter from "../PersonsCounter/PersonCounter";
const Plans = () => {
    const [showCal, setShowCal] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [counter, setCounter] = useState(false);
    const [persons, setPersons] = useState({
        adult: 1,
        children: 0,
        rooms: 1,
    });

    return (
        <div className="relative container mx-auto w-full max-w-[1024px] p-6 ">
            <nav className="flex justify-between items-center text-white  ">
                <Link to="/stays">
                    <div className="flex items-center justify-between font-semibold border rounded-full p-1 px-2 ">
                        <FontAwesomeIcon icon={faBed} />

                        <h4 className="ml-2">Stays</h4>
                    </div>
                </Link>
                <Link to="/flights">
                    <div className="flex items-center justify-between font-semibold active:border rounded-full p-1 px-2 ">
                        <FontAwesomeIcon icon={faPlaneArrival} />
                        <h4 className="ml-2">Flights</h4>
                    </div>
                </Link>
                <Link to="/rentCar">
                    <div className="flex items-center justify-between font-semibold active:border rounded-full p-1 px-2 ">
                        <FontAwesomeIcon icon={faCar} />
                        <h4 className="ml-2">Car rentals</h4>
                    </div>
                </Link>
                <Link to="/attractions">
                    <div className="flex items-center justify-between font-semibold active:border rounded-full p-1 px-2 ">
                        <FontAwesomeIcon icon={faDungeon} />
                        <h4 className="ml-2">Attractions</h4>
                    </div>
                </Link>
                <Link to="/airportTaxi">
                    <div className="flex items-center justify-between font-semibold active:border rounded-full p-1 px-2 ">
                        <FontAwesomeIcon icon={faCaravan} />
                        <h4 className="ml-2">Airport taxis</h4>
                    </div>
                </Link>
            </nav>
            <div className=" py-14 text-white flex flex-col space-y-6">
                <h1 className="text-4xl font-bold">
                    A lifetime of discounts? It's Genius.
                </h1>
                <p className="text-xl">
                    Get rewarded for your travels – unlock instant savings of
                    10% or more with a free Booking.com account
                </p>

                <button className="bg-cyan-700 w-1/6  p-2 py-3 font-semibold">
                    Login / Register
                </button>
            </div>
            <div className="absolute flex items-center justify-between bg-white rounded border-2   w-full max-w-[1024px] p-1 bottom-[-32px] right-0 left-0 ">
                <div>
                    <FontAwesomeIcon
                        className="text-neutral-500 text-xl text-bold mr-2 "
                        icon={faBed}
                    />
                    <input
                        className="border-none outline-none "
                        type="text"
                        name=""
                        placeholder="Where are you going?"
                        id=""
                    />
                </div>
                <div className=" relative ">
                    <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="text-neutral-500 text-xl text-bold mr-2"
                    />
                    <span
                        className=" cursor-pointer"
                        onClick={() => {
                            setShowCal(!showCal);
                        }}>
                        {`${format(
                            date[0].startDate,
                            "dd/MM/yyyy"
                        )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                    </span>
                    {showCal && (
                        <DateRange
                            className="absolute top-[40px] left-0"
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                        />
                    )}
                </div>
                <div className=" relative ">
                    <FontAwesomeIcon
                        icon={faPeopleGroup}
                        className="text-neutral-500 text-xl text-bold mr-2"
                    />
                    <span
                        className=" cursor-pointer"
                        onClick={() => {
                            setCounter(!counter);
                        }}>
                        {`${persons.adult} adult. ${persons.children} children. ${persons.rooms} room`}
                    </span>
                    {counter && <PersonCounter />}
                </div>
                <button className="bg-cyan-700 w-1/6  p-2 py-3 font-semibold">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Plans;
