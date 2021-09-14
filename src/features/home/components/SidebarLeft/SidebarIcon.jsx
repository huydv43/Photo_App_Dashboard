import { SidebarData } from 'constants/SidebarData';
import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarIcon.scss';

function SidebarIcon() {
    return (
        <> 
            {
                SidebarData.map((item, index) => {
                    return (
                        <Link to={item.path} key={index} className={item.cName}>
                            <span className="menu__toggle">{item.icon}</span>
                        </Link>
                    )
                })
            }
        </>
    );
}

export default SidebarIcon;