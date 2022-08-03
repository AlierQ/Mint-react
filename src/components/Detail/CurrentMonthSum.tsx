import styled from 'styled-components';
import toFixed from '../../lib/toFixed';
import React from 'react';
import useRecord from 'useRecord';

const Wrapper = styled.div`
  background: #79c79f;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-weight: 500;
    font-size: 24px;
    color: #333333;
    margin-top: 10px;
  }

  .money-record {
    align-self: flex-start;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    margin-top: 20px;

    .data {
      display: flex;

      .in {
        margin-right: 80px;
        color: #333333;

        .money {
          span {
            font-size: 22px;
          }
        }
      }

      .out {

        .money {
          span {
            font-size: 22px;
          }
        }
      }
    }

    .line {
      width: 0;
      height: 50px;
      border: 1px solid #333333;
      margin: 0 30px;
    }

    .date {
      .year {
        color: #595959;
      }

      .mouth {
        color: #333333;

        span {
          font-size: 24px;
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

const CurrentMonthSum: React.FC = () => {

  const {record} = useRecord();

  const recordList = () => {
    if (record.length === 0) {
      return [];
    } else {
      return record.filter((item: Record) => {
        let nowDate = new Date();
        let recordDate = new Date(item.createTime);
        return recordDate.getFullYear() === nowDate.getFullYear() && recordDate.getMonth() === nowDate.getMonth();
      });
    }
  };

  const innumber = () => {
    let num = 0;
    recordList().forEach((item: Record) => {
      if (item.category === 'in') {
        num += item.amount;
      }
    });
    return toFixed(num, 2);
  };

  const outnumber = () => {
    let num = 0;
    recordList().forEach((item: Record) => {
      if (item.category === 'out') {
        num += item.amount;
      }
    });
    return toFixed(num, 2);
  };

  const year = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const month = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
      return '0' + month;
    } else {
      return month;
    }
  };

  return (
    <Wrapper>
      <div className="title">薄荷流水</div>
      <div className="money-record">
        <div className="date">
          <div className="year">{year()}年</div>
          <div className="mouth"><span>{month()}</span>月</div>
        </div>
        <div className="line"/>
        <div className="data">
          <div className="in">
            <div className="in-title">收入</div>
            <div className="money"><span>{innumber()}</span></div>
          </div>
          <div className="out">
            <div className="out-title">支出</div>
            <div className="money"><span>{outnumber()}</span></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CurrentMonthSum;