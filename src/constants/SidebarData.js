import { AiFillHome } from 'react-icons/ai';
import { ImBlogger } from 'react-icons/im';
import { IoCodeSlash } from 'react-icons/io5';
import { FaProductHunt } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <AiFillHome className="toggle__icon" />,
        cName: 'item'
    },
    {
        title: 'Blogs',
        icon: <ImBlogger className="toggle__icon" />,
        iconToggle: <IoIosArrowForward className="toggle__sub" />,
        cName: 'item'
    },
    {
        title: 'Developer',
        icon: <IoCodeSlash className="toggle__icon" />,
        iconToggle: <IoIosArrowForward className="toggle__sub" />,
        cName: 'item'
    },
    {
        title: 'Products',
        icon: <FaProductHunt className="toggle__icon" />,
        iconToggle: <IoIosArrowForward className="toggle__sub" />,
        cName: 'item'
    },
    

]
