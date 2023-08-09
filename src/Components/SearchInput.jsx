import React from 'react';
import { Input } from 'antd';
import styles from './Less/searchInput.less'
const { Search } = Input;

export const SearchInput = (style) => {
  return (
    <div className={styles.searchDiv}>
        <Search placeholder="To filter the clients by number /name" onSearch={() =>{}} className={styles.searchStyles}/>
    </div>
  );
};