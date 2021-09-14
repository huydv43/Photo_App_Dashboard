import { AiFillHome } from 'react-icons/ai';
import { ImBlogger } from 'react-icons/im';
import { IoCodeSlash } from 'react-icons/io5';
import { FaProductHunt } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

export const SidebarData = [
    {
        path:'/dashboard',
        title: 'Dashboard',
        icon: <AiFillHome className="toggle__icon" />,
        cName: 'item'
    },
    {
        path: '/blogs',
        title: 'Blogs',
        icon: <ImBlogger className="toggle__icon" />,
        iconToggle: <IoIosArrowForward className="toggle__sub" />,
        cName: 'item'
    },
    {
        path: '/developer',
        title: 'Developer',
        icon: <IoCodeSlash className="toggle__icon" />,
        iconToggle: <IoIosArrowForward className="toggle__sub" />,
        cName: 'item'
    },
    {
        path: '/products',
        title: 'Products',
        icon: <FaProductHunt className="toggle__icon" />,
        iconToggle: <IoIosArrowForward className="toggle__sub" />,
        cName: 'item'
    },
    

]
