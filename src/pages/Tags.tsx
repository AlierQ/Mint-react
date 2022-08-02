import Layout from 'components/Layout';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Icon from 'components/Icon';
import {useState} from 'react';

const Top = styled.div`
  height: 130px;
  background: #79c79f;
  display: flex;
  color: #333333;
  flex-direction: column;
  justify-content: flex-end;

  .back-and-title {
    display: flex;
    justify-content: center;

    .back {
      position: absolute;
      padding-top: 5px;
      left: 15px;

      span {
        font-size: 18px;
      }
    }

    .title {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }

  .in-and-out {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    > div {
      font-size: 20px;
      margin: 0 40px;
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
`;
const Content = styled.div``;
const Bottom = styled.div``;

const Tags = () => {
  const [category, setCategory] = useState<string>('out');
  const toggleCategory = (category: string) => {
    setCategory(category);
  };
  return (
    <Layout>
      <Top>
        <div className="back-and-title">
          <Link to="/add" className="back">
            <Icon name="back" color="#333" size="18"/>
            <span>返回</span>
          </Link>
          <div className="title">
            标签设置
          </div>
        </div>
        <div className="in-and-out">
          <div className={category === 'out' ? 'selected' : ''}
               onClick={
                 () => {
                   toggleCategory('out');
                 }
               }>支出
          </div>
          <div className={category === 'in' ? 'selected' : ''}
               onClick={
                 () => {
                   toggleCategory('in');
                 }
               }>收入
          </div>
        </div>
      </Top>
      <Content></Content>
      <Bottom></Bottom>
    </Layout>
  )
    ;
};

export default Tags;