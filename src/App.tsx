import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import Add from 'pages/Add';
import Detail from 'pages/Detail';
import Statistics from 'pages/Statistics';
import NotFound from 'pages/NotFound';
import Nav from 'components/Nav';

const Top = styled.div`
  border: 1px solid yellow;
`;
const Content = styled.div`
  //border: 1px solid blue;
  flex-grow: 1;
`;
const Bottom = styled.div`
  //border: 1px solid red;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <Layout>
      <Top>
        这里是顶部，假设有
        <br/>
      </Top>
      <Content>
        <Routes>
          <Route path="/" element={<Detail/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/statistics" element={<Statistics/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Content>
      <Bottom>
        <Nav/>
      </Bottom>
    </Layout>
  );
}

export default App;
