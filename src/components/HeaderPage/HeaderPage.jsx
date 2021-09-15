import React from 'react';
import { Layout } from 'antd';

function HeaderPage(props) {
    const { Header } = Layout;
    return (
        <Header className="site-layout-background" style={{ padding: 0 }} />
    );
}

export default HeaderPage;