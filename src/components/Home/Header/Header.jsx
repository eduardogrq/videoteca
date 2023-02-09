import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="bg-slate-200">
            <nav className="container mx-auto py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Mi logo</h2>
                <ul className="flex gap-3">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;