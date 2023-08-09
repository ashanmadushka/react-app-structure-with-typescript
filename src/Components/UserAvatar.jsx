import React from 'react';
import { Avatar, Row, Col, Space } from 'antd';
import styles from './Less/userAvatar.less';
import { getColor } from '../Utils/Common';

export const UserAvatar = (username, size = 'large', src) => {
  return (
    <div>
        <Row>
            <Col span={8}>
                <Avatar
                    src={src}
                    className={styles.avatar}
                    style={{
                        backgroundColor: getColor(username),
                    }}
                    size={size}
                >
                    {!src ? username ? username.charAt(0).toUpperCase() : '' : ''}
                </Avatar>
            </Col>
            <Col span={16}>
                <Space.Compact direction="vertical" size="small" className={styles.nameContainer}>
                    <div className={styles.firstName}>Ashan</div>
                    <div className={styles.lastName}>ashan@gmail.com</div>
                </Space.Compact>
            </Col>
        </Row>
    </div>
  );
};