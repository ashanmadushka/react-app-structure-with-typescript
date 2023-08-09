import React, { useState } from 'react';
import { Layout } from 'antd';
import SiderMenu from './siderMenu';
import LayoutBanner from './layoutBanner';
import styles from './Less/style.less';
import RoutingList from '../Routes/routingList';

const { Content } = Layout;
function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const handleOnCollapse = () => {
    setCollapsed(prevState => !prevState);
  };

  return (
    <Layout 
        className={styles.main}
    >
        <LayoutBanner
            collapsed={collapsed}
            handleOnCollapse={handleOnCollapse}
        />
        <Layout className={styles.layout} hasSider>
            <SiderMenu collapsed={collapsed} handleOnCollapse={handleOnCollapse} />
            <Content className={styles.contentLayout}>
                <div className={styles.content}>
                    <RoutingList />
                </div>
            </Content>
        </Layout>
    </Layout>
  );
}

export default MainLayout;