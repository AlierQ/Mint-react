import Layout from 'components/Layout';
import InputPad from 'components/InputPad';
import TagsList from 'components/TagsList';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Top = styled.div`
  height: 80px;
  background: #79c79f;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;

  .in,
  .out {
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

  .close {
    position: absolute;
    right: 20px;
    font-size: 18px;
  }
`;
const Content = styled.div``;
const Bottom = styled.div``;

const Add = () => {
  return (
    <Layout>
      <Top>
        <div className="out selected">支出</div>
        <div className="in selected">收入</div>
        <Link to="/" className="close">取消</Link>
      </Top>
      <Content>
        <TagsList/>
      </Content>
      <Bottom><InputPad/></Bottom>
    </Layout>
  );
};

export default Add;