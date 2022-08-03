import Icon from 'components/Icon';
import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  > ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #333333;

    li {
      border-bottom: 1px solid #eee;
      height: 50px;
      width: 90vw;
      display: flex;
      align-items: center;

      .delete {
        margin-right: 15px;
      }

      .content {
        display: flex;

        .tu {
          margin-right: 15px;
        }

        > .remake {
          font-size: 16px;
        }
      }
    }
  }
`;

type Props = {
  tags: {
    id: number
    className: string
    remake: string
  }[]
  deleteTag: (id: number, className: string) => void
}

const TagsEditList: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <ul>
        {
          props.tags.map((item) => {
            return (
              <li key={item.id}>
                <div className="delete" onClick={() => {
                  props.deleteTag(item.id, item.className);
                }}>
                  <Icon name="delete" color="#EB4D3D" size="30"/>
                </div>
                <div className="content">
                  <div className="tu">
                    <Icon name={item.className} color="#333333" size="22"/>
                  </div>
                  <div className="remake">{item.remake}</div>
                </div>
              </li>
            );
          })
        }
      </ul>
    </Wrapper>
  );
};

export default TagsEditList;