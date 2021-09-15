import { Layout } from 'antd';
import BreadcrumbPage from 'components/BreadcrumbPage/BreadcrumbPage';
import FooterPage from 'components/FooterPage/FooterPage';
import HeaderPage from 'components/HeaderPage/HeaderPage';
import Navigation from 'components/Navigation/Navigation';
import Main from 'features/Main';
import React from 'react';
import './DefaultLayouts.scss';

function DefaultLayouts() {
    const { Content } = Layout;

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navigation />
            <Layout className="site-layout">
                <HeaderPage />
                <Content style={{ margin: '0 16px' }}>
                    <BreadcrumbPage />
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 1000 }}>
                        <Main />
                    </div>
                </Content>
                <FooterPage />
            </Layout>
        </Layout>
    );
}

export default DefaultLayouts;