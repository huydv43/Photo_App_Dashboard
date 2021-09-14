import { SidebarData } from 'constants/SidebarData';
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            {
                SidebarData.map((item, index) => {
                    return (
                        item.iconToggle ? (
                            <li key={index} className={item.cName}>
                                <span className="menu__toggle">{item.icon}</span><span className="menu__title">{item.title}</span>{item.iconToggle? item.iconToggle : null}
                            </li>
                        ) : (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span className="menu__toggle">{item.icon}</span><span className="menu__title">{item.title}</span>{item.iconToggle? item.iconToggle : null}
                                </Link>
                            </li>
                        )
                    )
                })
            }
        </>
    );
}

export default Sidebar;