import styled from 'styled-components';
import Icon from 'components/Icon';

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
          background: $color-basic;
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
          font-size: 18px;
        }
      }
    }
  }
`;

const StatisticsDatalist = () => {
  return (
    <Wrapper>
      <div>
        <div className="recordDate">
          <div>第一周</div>
          <div>共计：15.00</div>
        </div>
        <ul>
          <li>
            <div className="record">
              <div className="icon-container">
                <Icon name="shopping" color="#545353" size="22"/>
              </div>
              <div className="remark">
                这是备注
              </div>
              <div className="money-number">
                - 100
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default StatisticsDatalist;
