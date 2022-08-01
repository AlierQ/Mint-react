import styled from 'styled-components';
import Icon from 'components/Icon';
import React, {useRef, useState} from 'react';

const Content = styled.div`
  background: #e6e7e8;
  border-radius: 5px;
  height: 40px;
  width: 96vw;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 10px;

  > label {
    color: #333333;
    font-size: 18px;
    margin-left: 2px;
  }

  > input {
    outline: 0;
    flex-grow: 1;
    margin-right: 10px;
    height: 30px;
    border: none;
    background: #e6e7e8;
    font-size: 16px;
  }
`;

const Remake: React.FC = () => {
  const [remake, setRemake] = useState<string>('');

  const refInput = useRef<HTMLInputElement>(null);

  const onBlur = () => {
    if (refInput.current !== null)
      console.log(refInput.current.value);
  };
  return (
    <Content>
      <Icon name="remake" color="#2fb86b" size="22"/>
      <label>
        备注:&nbsp;
      </label>
      <input type="text" placeholder="点击填写备注"
             ref={refInput}
             defaultValue={remake}
             onBlur={onBlur}/>
    </Content>
  );
};
export default Remake;