import React, { useEffect, useState } from 'react';
import './Main.scss';
import { useDispatch } from 'react-redux';
import Auth from '../../../../apis/Auth';
import Images from '../../../../constants/Images';
import { SidebarData } from '../../../../constants/SidebarData';
import { IoIosArrowForward } from 'react-icons/io'
import PropTypes from 'prop-types';

Main.propTypes = {
    
};

function Main() {
    const [loading, setLoading] = useState(false);
    const [toggleSidebar, setToggleSidebar] = useState(true);
    const  dispatch = useDispatch();
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const resUser = await Auth.getUserInfo();
                console.log(resUser);
                if (resUser.status === 200) {

                }
            } catch (error) {
                throw(error)
            }
        }
        getUserInfo();
    },[])

    const handleHideSidebar = () => {
        // setToggleSidebar(!toggleSidebar);
    }
    return (
        
        <div className="grid">
            <div className={toggleSidebar? 'side-bar' : 'side-bar-hide'}>
                <div className="logo">
                    <span className="logo__icon" onClick={handleHideSidebar}><i class="fas fa-bars"></i></span>
                    <img className="logo__img" src={Images.LOGO_LOGIN} alt="logo" />
                    <h3 className="logo__title">Photo App</h3>
                </div>
                <div className="info">
                    <img className="info__img" src={Images.ADMIN_USER} alt="this is super admin" />
                    <div className="info-content">
                        <strong className="name">
                            Do Van Huy
                        </strong>
                        <span className="role">
                            Super Admin
                        </span>
                    </div>
                </div>
                <ul className="list-item">
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <span className="menu__toggle">{item.icon}</span><span className="menu__title">{item.title}</span>{item.iconToggle? item.iconToggle : null}
                                </li>
                            )
                        })
                    }
                </ul>
                
            </div>
        </div>
    );
}

export default Main;

