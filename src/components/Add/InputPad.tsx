import styled from 'styled-components';
import Remake from 'components/Add/InputPad/Remake';
import OutPad from 'components/Add/InputPad/OutPad';
import Pad from 'components/Add/InputPad/Pad';
// 样式
const Wrapper = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputPad = () => {
  return (
    <Wrapper>
      <OutPad/>
      <Remake/>
      <Pad/>
    </Wrapper>
  );
};

export default InputPad;