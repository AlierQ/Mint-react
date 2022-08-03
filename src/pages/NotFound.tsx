import Layout from 'components/Layout';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Icon from 'components/Icon';

const Top = styled.div``;
const Content = styled.div`
  .page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .toDetail {
      margin-top: 10px;
      color: #79c79f;
      text-decoration: underline #79c79f;
    }
  }
`;
const Bottom = styled.div``;

const NotFound = () => {
  return (
    <Layout>
      <Top/>
      <Content>
        <div className="page">
          <Icon name="404" color="#79c79f" size="240"/>
          <Link to="/" className="toDetail"><em>点击此处返回首页</em></Link>
        </div>
      </Content>
      <Bottom/>
    </Layout>
  );
};

export default NotFound;