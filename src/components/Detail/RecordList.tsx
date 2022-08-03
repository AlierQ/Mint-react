import styled from 'styled-components';
import Icon from 'components/Icon';
import React from 'react';

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
    font-size: 15px;
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
        }

        .remark {
          flex-grow: 1;
        }

        .money-number {
          margin-right: 10px;
          font-size: 18px;
        }
      }
    }
  }
`;
type Record = {
  tag: string
  tagId: number
  category: string
  remake: string
  amount: number
  createTime: string
}

type RecordGroup = {
  inSum?: number
  outSum?: number
  title: string
  items: Record[]
}
type Props = {
  recordData: RecordGroup[]
}

const RecordList: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      {
        props.recordData.map((group) => {
          return (
            <div key={group.title}>
              <div className="recordDate">
                <div>{group.title}</div>
                <div>
                  {group.inSum !== 0 ? '收入：' + group.inSum : ''}
                  &nbsp;&nbsp;
                  {group.outSum !== 0 ? '支出：' + group.outSum : ''}
                </div>
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
                          <div className="remark">
                            {item.remake}
                          </div>
                          <div className="money-number">
                            {(item.category === 'in' ? '+' : '-') + item.amount}
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
export default RecordList;