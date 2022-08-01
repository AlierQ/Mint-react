import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  text-align: right;
  color: #333333;
  font-size: 32px;
  padding-right: 10px;
  height: 60px;
  line-height: 60px;
  align-self: flex-end;
  font-family: Consolas, monospace;
`;

const OutPad: React.FC = () => {
  return (
    <Wrapper>0123</Wrapper>
  );
};

export default OutPad;