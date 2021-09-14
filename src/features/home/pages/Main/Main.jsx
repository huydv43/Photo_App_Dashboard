import React, { useEffect, useState } from 'react';
import './Main.scss';
import { useDispatch } from 'react-redux';
import { BiMenu } from 'react-icons/bi'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Auth from 'apis/Auth';
import Sidebar from 'features/home/components/SidebarLeft/Sidebar';
import SidebarIcon from 'features/home/components/SidebarLeft/SidebarIcon';
import Images from 'constants/Images';

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


    const renderSidebar1 = () => {
        if (window.innerWidth > 1169) {
            return <Sidebar />;
        } else {
            return <SidebarIcon />;
        }
    }

    const handleHideSidebar = () => {
        // setToggleSidebar(!toggleSidebar);
    }
    return (
        
        <div className="grid">
            <div className={toggleSidebar? 'side-bar' : 'side-bar-hide'}>
                <div className="logo">
                    <span className="logo__icon" onClick={handleHideSidebar}><BiMenu /></span>
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
                        renderSidebar1()
                    }
                </ul>
                
            </div>
        </div>
    );
}

export default Main;

