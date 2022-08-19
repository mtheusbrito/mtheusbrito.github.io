import React from 'react';
import Header from '../../Components/Header';
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles';

const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      
        <Outlet />
      
    </LayoutContainer>
  );
}

export default DefaultLayout;