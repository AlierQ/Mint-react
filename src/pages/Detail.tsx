import Layout from 'components/Layout';
import Nav from 'components/Nav';
import styled from 'styled-components';
import CurrentMonthSum from '../components/Detail/CurrentMonthSum';

const Top = styled.div``;
const Content = styled.div``;
const Bottom = styled.div``;

const Detail = () => {
  return (
    <Layout>
      <Top>
        <CurrentMonthSum/>
      </Top>
      <Content>这里是明细页面的内容</Content>
      <Bottom>
        <Nav/>
      </Bottom>
    </Layout>
  );
};

export default Detail;