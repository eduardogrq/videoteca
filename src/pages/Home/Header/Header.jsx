import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header class="bg-blue-500 text-white py-4 px-8">
            <div className="container flex mx-auto">
                <div className="w-1/2">
                    <h1 class="text-4xl font-bold">Videoteka</h1>
                </div>
                <div className="w-1/2 flex items-center text-right">
                    <Link to="/dashboard" className="w-full ml-auto">Dashboard</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;