import React from "react";

const PersonCounter = () => {
    return (
        <div className="absolute border border-sky-500 top-[40px] w-full left-0">
            <div className="flex items-center justify-between p-2">
                <h4>Adult:</h4>
                <div>
                    <button className="border border-sky-500 rounded-full  px-2">
                        -
                    </button>
                    <span className="mx-1"> 0 </span>
                    <button className="border border-sky-500 rounded-full px-2">
                        +
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between p-2">
                <h4>Children:</h4>
                <div>
                    <button className="border border-sky-500 rounded-full  px-2">
                        -
                    </button>
                    <span className="mx-1"> 0 </span>
                    <button className="border border-sky-500 rounded-full px-2">
                        +
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between p-2">
                <h4>Room:</h4>
                <div>
                    <button className="border border-sky-500 rounded-full  px-2 ">
                        -
                    </button>
                    <span className="mx-1"> 0 </span>
                    <button className="border border-sky-500 rounded-full px-2">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PersonCounter;
