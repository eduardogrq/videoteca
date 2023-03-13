
import { ArrowDownIcon, NotificationIcon } from "../../../../assets/icons";

const Navbar = ({ turnToHidden }) => {

    return (
        // {/* Barra de navegación */}
        <nav className="w-full bg-white h-20 flex items-center justify-between px-8">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={turnToHidden}
                    fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className='flex items-center text-sm gap-4'>

                <NotificationIcon classes="w-6 h-6 cursor-pointer mr-5 hidden lg:block" />

                <span className='hidden lg:block'>Eduardo Quiñonez</span>
                <div className='flex items-center cursor-pointer'>
                    <img src="https://picsum.photos/seed/picsum/40/40"
                        className="rounded-full mr-3"
                        alt=""
                    />
                    <ArrowDownIcon classes="w-3 h-3" />
                </div>

            </div>
        </nav>
    );
}

export default Navbar;