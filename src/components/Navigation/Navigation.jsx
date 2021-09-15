import React, { useState } from 'react';
import Images from 'constants/Images';
import { Layout, Menu, Image } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';


function Navigation() {
    const [collapsed, setCollapsed] = useState(false);
    const { Sider } = Layout;
    const { SubMenu } = Menu;

    const onCollapse = () => {
        setCollapsed(!collapsed)
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <div className="info">
                <Image className="info__avatar" src={Images.ADMIN_USER} />
                <div className={collapsed ? 'hide-info-content' : 'info-content'}>
                    <span className="info-content__name">
                        Do van Huy
                    </span>
                    <span className="info-content__role">
                        Super Admin
                    </span>
                </div>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Profile
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="My Blog">
                    <Menu.Item key="3">All Post</Menu.Item>
                    <Menu.Item key="4">New Post</Menu.Item>
                    <Menu.Item key="5">Edit Post</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Products">
                    <Menu.Item key="6">All Product</Menu.Item>
                    <Menu.Item key="7">New Product</Menu.Item>
                    <Menu.Item key="8">Edit Product</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                    MyCV
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default Navigation;