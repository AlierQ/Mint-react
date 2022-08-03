import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Add from 'pages/Add';
import Detail from 'pages/Detail';
import Statistics from 'pages/Statistics';
import NotFound from 'pages/NotFound';
import Tags from 'pages/Tags';
import TagsAdd from 'pages/TagsAdd';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Detail/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/statistics" element={<Statistics/>}/>
      <Route path="/tags" element={<Tags/>}/>
      <Route path="/tagsadd/:category" element={<TagsAdd/>}/>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
