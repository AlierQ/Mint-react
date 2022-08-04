import styled from 'styled-components';
import Icon from 'components/Icon';
import React from 'react';
import toFixed from '../../lib/toFixed';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .recordDate {
    padding: 0 10px;
    color: #666;
    width: 96vw;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      > .record {
        display: flex;
        align-items: center;
        height: 54px;
        width: 96vw;
        border-top: 1px solid rgba(0, 0, 0, 0.1);

        .icon-container {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #79c79f;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 10px;

          .icon {
            width: 22px;
            height: 22px;
            fill: #545353;
          }
        }

        .remark {
          flex-grow: 1;
        }

        .money-number {
          margin-right: 10px;
          font-size: 16px;
        }
      }
    }
  }
`;

type Props = {
  groupData: {
    sum?: number
    title: string
    items: {
      tag: string
      tagId: number
      category: string
      remake: string
      amount: number
      createTime: string
    }[]
  }[]
}

const StatisticsDatalist: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      {
        props.groupData.map((group) => {
          return (
            <div key={group.title}>
              <div className="recordDate">
                <div>{group.title}</div>
                <div>共计：{toFixed(group.sum as number, 2)}</div>
              </div>
              <ul>
                {
                  group.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="record">
                          <div className="icon-container">
                            <Icon name={item.tag} color="#545353" size="22"/>
                          </div>
                          <div className="remark">{item.remake}</div>
                          <div className="money-number">
                            {(item.category === 'out' ? '-' : '+') + item.amount}
                          </div>
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

export default StatisticsDatalist;
