import React from "react";
import { Link } from "react-router-dom";

const Plans = () => {
    return (
        <nav className="flex justify-between items-center text-white mx-40 p-6 ">
            <Link
                to="/stays"
                className="border rounded-full p-1 px-2 font-semibold">
                <div className="flex items-center justify-between">
                    <img src="https://img.icons8.com/carbon-copy/40/000000/apple-home.png" />
                    <h4 className="ml-2">Stays</h4>
                </div>
            </Link>
            <Link
                to="/flights"
                className="border rounded-full p-1 px-2 font-semibold">
                <div className="flex items-center justify-between">
                    <img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/40/000000/external-plane-holiday-xnimrodx-lineal-xnimrodx.png" />
                    <h4 className="ml-2">Flights</h4>
                </div>
            </Link>
            <Link
                to="/rentCar"
                className="border rounded-full p-1 px-2 font-semibold">
                <div className="flex items-center justify-between">
                    <img src="https://img.icons8.com/ios/40/000000/sedan.png" />
                    <h4 className="ml-2">Car rentals</h4>
                </div>
            </Link>
            <Link
                to="/attractions"
                className="border rounded-full p-1 px-2 font-semibold">
                <div className="flex items-center justify-between">
                    <img src="https://img.icons8.com/ios/40/000000/chicago.png" />
                    <h4 className="ml-2">Attractions</h4>
                </div>
            </Link>
            <Link
                to="/airportTaxi"
                className="border rounded-full p-1 px-2 font-semibold">
                <div className="flex items-center justify-between">
                    <img src="https://img.icons8.com/external-konkapp-detailed-outline-konkapp/40/000000/external-taxi-transportation-konkapp-detailed-outline-konkapp.png" />
                    <h4 className="ml-2">Airport taxis</h4>
                </div>
            </Link>
        </nav>
    );
};

export default Plans;
