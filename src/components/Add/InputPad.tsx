import styled from 'styled-components';
import Remake from 'components/Add/InputPad/Remake';
import OutPad from 'components/Add/InputPad/OutPad';
import Pad from 'components/Add/InputPad/Pad';
import React, {useState} from 'react';
// 样式
const Wrapper = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type Props = {
  amount: number
  setAmount: (amount: number) => void
}

const InputPad: React.FC<Props> = (props) => {
  const [outNumber, setOutNumber] = useState<string>('0');
  return (
    <Wrapper>
      <OutPad outNumber={outNumber}/>
      <Remake/>
      <Pad
        outNumber={outNumber}
        setNumber={(number) => {
          setOutNumber(number);
        }}
        setAmount={props.setAmount}/>
    </Wrapper>
  );
};

export default InputPad;