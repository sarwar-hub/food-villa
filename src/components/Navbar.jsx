import ActiveLink from "./ActiveLink";

const navItems = [
    <li className="hover:text-sec font-semibold transition"><ActiveLink to='/'>HOME</ActiveLink></li>,
    <li className="hover:text-sec font-semibold transition"><ActiveLink to='/contact'>CONTACT US</ActiveLink></li>,
    <li className="hover:text-sec font-semibold transition"><ActiveLink to='/dashboard'>DASHBOARD</ActiveLink></li>,
    <li className="hover:text-sec font-semibold transition"><ActiveLink to='/menu'>MENU</ActiveLink></li>,
    <li className="hover:text-sec font-semibold transition"><ActiveLink to='/shop'>SHOP</ActiveLink></li>,
];

const Navbar = () => {

    return (
        <div className="drawer bg-dark/30 fixed z-10 max-w-[1280px] mx-auto">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <div className="w-full navbar text-light">
                    
                        <div className="flex-none lg:hidden ">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-3xl font-bold">FOOD VILLA</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="space-x-5 menu-horizontal">

                                {navItems}

                            </ul>
                        </div>
                        {/* user */}
                        <div className="ml-3 border-sec border-4 rounded-full w-[40px] h-[40px]">
                            <img className="w-[40px] h-[40px]" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    
                </div>

                {/* drawer */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="space-y-5 p-4 w-60 h-full bg-dark">

                    {navItems}

                </ul>

            </div>
        </div>
    );
};

export default Navbar;