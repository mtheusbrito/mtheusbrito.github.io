import React from 'react';
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '../../layouts/DefaultLayout';
import Projects from '../../pages/Projects';
import Start from '../../pages/Start';
import About from '../../pages/About';
import Curriculum from '../../pages/Curriculum';

// import { Container } from './styles';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Start />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path='/curriculum' element={<Curriculum/>}/>
      </Route>
    </Routes>
  );
}

export default Router;