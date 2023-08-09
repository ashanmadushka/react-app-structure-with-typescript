import { Provider } from 'react-redux';
import store from './Store/store';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './Layouts/mainLayout';
import {ConfigProvider, theme} from 'antd';

const App: React.FC = () => (
  <Provider store={store}>
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#306BFF',
        },
      }}
    >
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);
export default App