const Header = () => {
    return (
        <div className="container mx-auto  w-full max-w-[1024px] p-6 ">
            <div className="flex justify-between items-center  ">
                <div className="text-white text-4xl font-bold">Chokkor.com</div>
                <div className="flex items-center justify-between space-x-4 text-white">
                    <h1 className="">BDT</h1>
                    <img
                        width="25"
                        height="25"
                        className=" rounded-full "
                        src="https://images.pexels.com/photos/2106686/pexels-photo-2106686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />

                    <button className="border p-2 px-3 font-semibold">
                        List your property
                    </button>

                    <button className="border p-2 px-3 font-semibold">
                        Login
                    </button>
                    <button className=" border p-2 px-3 font-semibold">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
