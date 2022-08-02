import styled from 'styled-components';
import Remake from 'components/Add/InputPad/Remake';
import OutPad from 'components/Add/InputPad/OutPad';
import Pad from 'components/Add/InputPad/Pad';
import React from 'react';
// 样式
const Wrapper = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type Props = {
  amount:number
}

const InputPad:React.FC<Props> = () => {
  return (
    <Wrapper>
      <OutPad/>
      <Remake/>
      <Pad/>
    </Wrapper>
  );
};

export default InputPad;