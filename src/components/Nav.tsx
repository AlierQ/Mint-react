import {NavLink, Link} from 'react-router-dom';
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

    &.active {
      svg {
        fill: #79c79f;
      }

      > span {
        color: #79c79f !important;
      }
    }

    &.add-active {
      > span {
        color: #79c79f !important;
      }
    }

    > div {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #79c79f;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 40px;
    }

    > span {
      margin-top: 2px;
      font-size: 12px;
      color: #3f3e3f;
    }
  }
`;

const Nav = () => {

  return (
    <Content>
      <NavLink to="/" className={({isActive}) =>
        isActive ? 'active' : 'undefined'}>
        <Icon className="detail" color="#333" size="32"/>
        <span>明细</span>
      </NavLink>
      <NavLink to="/add" className={({isActive}) =>
        isActive ? 'add-active' : 'undefined'}>
        <div>
          <Icon className="add" color="#333" size="20"/>
        </div>
        <span>记一笔</span>
      </NavLink>
      <NavLink to="/statistics" className={({isActive}) =>
        isActive ? 'active' : 'undefined'}>
        <Icon className="statistics" color="#333" size="32"/>
        <span>统计</span>
      </NavLink>
    </Content>
  );
};

export default Nav;