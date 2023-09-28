import type { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { navActiveState } from '../../recoil/navStore';
import { isDrawerOpenState } from '../../recoil/drawerStore';

interface Props{
    link: NavLink;
}

const NavListItem: FC<Props> = ({ link }) => {

    const [navActive, setNavActive] = useRecoilState(navActiveState);
    const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState)

    const handleNavActive = () => {
        setNavActive(link.title)
        isDrawerOpen && setIsDrawerOpen(false);
    }

    return (
        <li 
            className={`${navActive === link.title ? 'text-white' : 'text-secondary'} ${isDrawerOpen ? 'opacity-100 font-poppins font-medium text-[16px]' : 'hover:text-white text-[18px] font-medium'} cursor-pointer`}
            onClick={handleNavActive}
        >
            <a href={`#${link.id}`}>
                {link.title}
            </a>
        </li>
    );
};

export default NavListItem;