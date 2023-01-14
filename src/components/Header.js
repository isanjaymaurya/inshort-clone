import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <header className="sticky top-0 w-full bg-netural-100 shadow-md z-40 backdrop-blur">
            <nav className="relative mx-auto h-14 flex items-center">
                <div className='flex items-center'>
                    <button className='rounded-full py-2 px-3 hover:bg-gray-50'>
                        <Bars3Icon className='h-6 w-6' />
                    </button>
                    <span className='text-lg hidden md:block'>Menu</span>
                </div>
            </nav>
        </header>
    )
}

export default Header