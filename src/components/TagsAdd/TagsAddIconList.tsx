import Icon from '../Icon';
import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  .icon-title {
    margin-top: 10px;
    text-align: center;
  }

  ul {
    margin-top: 5px;
    margin-bottom: 10px;
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, 40px);
    grid-column-gap: 34px;
    grid-row-gap: 20px;
    justify-content: center;

    li {
      > .one-icon {
        border-radius: 50%;
        background: #F5F5F5;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

type Props = {
  tagsAddList: {
    title: string
    icons: string[]
  }[]
  setSelected: (selectedIcon: string) => void
}


const TagsAddIconList: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      {
        props.tagsAddList.map((item) => {
          return (
            <div key={item.title}>
              <div className="icon-title">{item.title}</div>
              <ul>
                {
                  item.icons.map((className) => {
                    return (
                      <li key={className}>
                        <div className="one-icon" onClick={() => {
                          props.setSelected(className);
                        }}>
                          <Icon name={className} color="#545353" size="28"/>
                        </div>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          );
        })
      }
    </Wrapper>
  );
};
export default TagsAddIconList;