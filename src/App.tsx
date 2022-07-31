import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Add from 'pages/Add';
import Detail from 'pages/Detail';
import Statistics from 'pages/Statistics';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Detail/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/statistics" element={<Statistics/>}/>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
