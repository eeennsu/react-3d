import type { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles';
import { navLinks } from '../constants';
import { menu, close, myLogo } from '../assets';
import NavListItem from '../components/Header/NavListItem';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { navActiveState } from '../recoil/navStore';
import { isDrawerOpenState } from '../recoil/drawerStore';

const Navbar: FC = () => {

    const setNavActive = useSetRecoilState(navActiveState);
    const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState);

    const handleLogo = () => {
        setNavActive('');
        window.scrollTo(0, 0);
    }

    const handleDrawerToggle = () => {
        setIsDrawerOpen(prev => !prev);
    }

    return (
        <header className={`${styles.paddingX} fixed top-0 z-20 flex items-center w-full py-5 bg-gray-500/80`}>
            <nav className='flex items-center justify-between w-full mx-auto max-w-7xl'>
                <Link 
                    className='flex items-center gap-3' 
                    to='/'
                    onClick={handleLogo}
                >
                    <img src={myLogo} alt='logo' className='object-contain w-10 h-10 rounded-lg' />        
                    <p className='text-[20px] font-semibold cursor-pointer flex'>
                        Eunsu &nbsp;<span className='hidden sm:block'> |&nbsp; Front Developer</span>
                    </p>
                </Link>
                <ul className='hidden gap-10 sm:flex'>
                    {
                        navLinks.map(link => (
                            <NavListItem
                                key={link.id} 
                                link={link} 
                            />
                        ))
                    }
                </ul>

                {/* mobile drawer */}
                <div className='flex items-center justify-end flex-1 sm:hidden'>
                    <img 
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        src={isDrawerOpen ? close : menu} 
                        alt='menu' 
                        onClick={handleDrawerToggle}
                    />

                    <div className={`${!isDrawerOpen ? 'hidden' : 'flex'} p-6  absolute mx-4 my-2 black-gradient z-10 top-20 right-0 rounded-lg min-w-[140px]`}>
                        <ul className='flex flex-col items-start gap-5'>
                            {
                                navLinks.map(link => (
                                    <NavListItem
                                        key={link.id} 
                                        link={link} 
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;