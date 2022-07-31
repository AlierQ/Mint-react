import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Add from 'Add';
import Detail from 'Detail';
import Statistics from 'Statistics';
import NotFound from 'NotFound';

function App() {
  return (
    <>
      <div>
        <Link to="/">详情页</Link>&nbsp;
        <Link to="/add">添加页</Link>&nbsp;
        <Link to="/statistics">统计页</Link>
      </div>
      <Routes>
        <Route path="/" element={<Detail/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/statistics" element={<Statistics/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
