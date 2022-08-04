import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #79c79f;

  .top {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 10px;
    margin-bottom: 10px;

    > div {
      font-size: 22px;
      margin: 0 10px;
      position: relative;

      &.selected {
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #333;
        }
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    div {
      border: 1px solid #1C1D1F;
      width: 30%;
      text-align: center;

      &.selected {
        background: #1C1D1F;
        color: #79c79f;
      }
    }

    div:nth-child(1) {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-right: 0;
    }

    div:nth-child(2) {
      border-right: 0;
    }

    div:nth-child(3) {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;

type Props = {
  category: string
  groupType: string
  updateCategory: (value: string) => void
  updateGroupType: (value: string) => void
}

const StatisticsTop: React.FC<Props> = (props) => {

  return (
    <Wrapper>
      <div className="top">
        <div className={props.category === 'out' ? 'selected' : ''}
             onClick={() => {
               props.updateCategory('out');
             }}>支出
        </div>
        <div className={props.category === 'in' ? 'selected' : ''}
             onClick={() => {
               props.updateCategory('in');
             }}>收入
        </div>
      </div>
      <div className="bottom">
        <div className={props.groupType === 'week' ? 'selected' : ''}
             onClick={() => {
               props.updateGroupType('week');
             }}>周
        </div>
        <div className={props.groupType === 'month' ? 'selected' : ''}
             onClick={() => {
               props.updateGroupType('month');
             }}>月
        </div>
        <div className={props.groupType === 'year' ? 'selected' : ''}
             onClick={() => {
               props.updateGroupType('year');
             }}>年
        </div>
      </div>
    </Wrapper>
  );
};

export default StatisticsTop;