import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  justify-content: space-evenly;
  padding: 4px 0;
  & > a{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    > span{
      margin-top: 2px;
      font-size: 14px;
      color: #3f3e3f;
    }
  }
`;
const Icon = styled.div`
  width: 32px;
  height: 32px;
  background: #666;
`;

const Nav = () => {
  return (
    <Content>
      <Link to="/">
        <Icon/>
        <span>明细</span>
      </Link>&nbsp;
      <Link to="/add">
        <Icon/>
        <span>记一笔</span>
      </Link>&nbsp;
      <Link to="/statistics">
        <Icon/>
        <span>统计</span>
      </Link>
    </Content>
  );
};

export default Nav;