import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex justify-between items-center mx-40 p-6 ">
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
                <Link to="/propertyList" className="border p-2 font-semibold">
                    List your property
                </Link>
                <Link to="/login" className="border p-2 font-semibold">
                    Login
                </Link>
                <Link to="/register" className="border p-2 font-semibold">
                    Register
                </Link>
            </div>
        </nav>
    );
};

export default Header;
