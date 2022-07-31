import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';

const Content = styled.div`
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  justify-content: space-evenly;
  padding: 4px 0;

  & > a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;

    > span {
      margin-top: 2px;
      font-size: 14px;
      color: #3f3e3f;
    }
  }
`;

const Nav = () => {

  return (
    <Content>
      <Link to="/">
        <Icon className="detail" color="red" size="30"/>
        <span>明细</span>
      </Link>
      <Link to="/add">
        <Icon className="add" color="blue" size="30"/>
        <span>记一笔</span>
      </Link>
      <Link to="/statistics">
        <Icon className="statistics" color="#ccc" size="30"/>
        <span>统计</span>
      </Link>
    </Content>
  );
};

export default Nav;