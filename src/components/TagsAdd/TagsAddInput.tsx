import styled from 'styled-components';
import Icon from 'components/Icon';
import React from 'react';

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

const TagsAddInput:React.FC = () => {
  return (
    <Wrapper>
      <div className="icon-show">
        <Icon name="shopping" color="#545353" size="28"/>
      </div>
      <div className="input">
        <input type="text" placeholder="请输入类别名称（不超过4个汉字）"/>
      </div>
    </Wrapper>
  );
};
export default TagsAddInput;