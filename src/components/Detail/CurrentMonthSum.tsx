import styled from 'styled-components';

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

const CurrentMonthSum = () => {
  return (
    <Wrapper>
      <div className="title">薄荷流水</div>
      <div className="money-record">
        <div className="date">
          <div className="year">2022年</div>
          <div className="mouth"><span>08</span>月</div>
        </div>
        <div className="line"/>
        <div className="data">
          <div className="in">
            <div className="in-title">收入</div>
            <div className="money"><span>100.00</span></div>
          </div>
          <div className="out">
            <div className="out-title">支出</div>
            <div className="money"><span>200.00</span></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CurrentMonthSum;