
function Header(){
    return(
        <div>
            <header className="bg-white fixed top-0 left-0 right-0 shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className='text-blue-500 font-bold text-2xl'>CreationsHub</h1>
                <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#services" className="hover:text-orange-500">Services</a>
          <a href="#projects" className="hover:text-orange-500">Projects</a>
          <a href="#contact" className="hover:text-orange-700">Contact</a>
        </nav>
                    {/* <img src={Logo} alt="" className='w-30'/> */}
            </div>

            </header>
        </div>

    );

}
export default Header
