
import { 
    Bars3Icon,
    BellIcon, 
    ChevronDownIcon 
} from '@heroicons/react/24/outline'

const Navbar = ({ turnToHidden }) => {

    return (
        <nav className="w-full bg-white h-20 flex items-center justify-between px-8">
            <div>
                <Bars3Icon onClick={turnToHidden} className="w-6 h-6 cursor-pointer" />
            </div>
            <div className='flex items-center text-sm gap-4'>
                <BellIcon className="w-6 h-6 cursor-pointer" />
                <span className='hidden lg:block'>Eduardo Quiñonez</span>
                <div className='flex items-center cursor-pointer'>
                    <img src="https://picsum.photos/seed/picsum/40/40"
                        className="rounded-full mr-3"
                        alt=""
                    />
                    <ChevronDownIcon className="w-3 h-3" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;