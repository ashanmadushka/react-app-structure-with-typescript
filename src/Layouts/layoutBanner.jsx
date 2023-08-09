import React from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Badge } from 'antd';
import styles from './Less/style.less';
import { UserAvatar } from '../Components/UserAvatar';
import { SearchInput } from '../Components/SearchInput';
import { ReactComponent as NotificationIcon } from '../Assest/Svg/Notification.svg';
import { ReactComponent as SettingIcon } from '../Assest/Svg/Setting.svg';
import { ReactComponent as LoadingIcon } from '../Assest/Svg/Loading.svg';
import { ReactComponent as HelpIcon } from '../Assest/Svg/Help.svg';
import { ReactComponent as UserIcon } from '../Assest/Svg/Users.svg';
import { ReactComponent as SearchIcon } from '../Assest/Svg/Search.svg';
import { ReactComponent as BodyIcon } from '../Assest/Svg/Body.svg';
import { ReactComponent as Logo } from '../Assest/Svg/IyLogo.svg';

const { Header } = Layout;
const { SubMenu } = Menu;

function LayoutBanner({ collapsed, handleOnCollapse }) {
  const getCollapseIcon = () => {
    if (collapsed) {
      return (
        <MenuUnfoldOutlined onClick={handleOnCollapse} className={styles.trigger} />
      );
    }
    return <MenuFoldOutlined onClick={handleOnCollapse} className={styles.trigger} />;
  };

  return (
    <Header className={styles.headerLayout}>
        
        <div
            className={styles.headerRight}
        >
            <Logo/>
            {window.innerWidth > 992 && getCollapseIcon()}
            <SearchInput/>
        </div>
        <Menu
            // onClick={this.handleLanguageMenuClick}
            mode="horizontal"
            className={styles.menu}
        >
            <SubMenu
                title={
                    <div>
                        <BodyIcon className={styles.searchIconText}/>
                        <SearchIcon />
                    </div>
                    
                }
            />
        </Menu>
        <Menu
            // onClick={this.handleLanguageMenuClick}
            mode="horizontal"
            className={styles.menu}
        >
            <SubMenu
                title={
                    <UserIcon />
                }
            />
        </Menu>
        <Menu
            // onClick={this.handleLanguageMenuClick}
            mode="horizontal"
            className={styles.menu}
        >
            <SubMenu
                title={
                    <HelpIcon />
                }
            />
        </Menu>
        <Menu
            // onClick={this.handleLanguageMenuClick}
            mode="horizontal"
            className={styles.menu}
        >
            <SubMenu
                title={
                    <LoadingIcon />
                }
            />
        </Menu>
        <Menu
            // onClick={this.handleLanguageMenuClick}
            mode="horizontal"
            className={styles.menu}
        >
            <SubMenu
                title={
                    <SettingIcon />
                }
            />
        </Menu>
        <Menu
            // onClick={this.handleLanguageMenuClick}
            mode="horizontal"
            className={styles.menu}
        >
            <SubMenu
                title={
                    <Badge count={12}>
                        <NotificationIcon />
                    </Badge>
                }
            />
        </Menu>
        <div className={styles.menuBorder}/>
        <Menu className={styles.profileWidth}>
            {UserAvatar('Cemal', 54, "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png")}
        </Menu>
    </Header>
  );
}

export default LayoutBanner;