import styled from 'styled-components';
import Icon from 'components/Icon';
import React, {useRef} from 'react';

const Wrapper = styled.div`
  border: 1px solid #eeeeee;
  display: flex;
  align-items: center;

  .icon-show {
    margin: 10px 0 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #79c79f;
  }

  .input {
    flex-grow: 1;
    margin-right: 20px;

    input {
      width: 100%;
      height: 45px;
      outline: 0;
      border: none;
      text-indent: 10px;
      font-size: 16px;
    }
  }
`;

type Props = {
  iconRemake: string
  selectedIcon: string
  setRemake: (remake: string) => void
}

const TagsAddInput: React.FC<Props> = (props) => {
  const refInput = useRef<HTMLInputElement>(null);
  return (
    <Wrapper>
      <div className="icon-show">
        <Icon name={props.selectedIcon} color="#545353" size="28"/>
      </div>
      <div className="input">
        <input type="text" placeholder="请输入类别名称（不超过4个汉字）"
               defaultValue={props.iconRemake}
               ref={refInput}
               onBlur={(e) => {
                 if (refInput.current !== null)
                   props.setRemake(refInput.current.value);
               }}/>
      </div>
    </Wrapper>
  );
};
export default TagsAddInput;