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

type Props = {
  outNumber:string
}

const OutPad: React.FC<Props>  = (props) => {
  return (
    <Wrapper>{props.outNumber}</Wrapper>
  );
};

export default OutPad;