import Nav from 'components/Nav';
import Layout from 'components/Layout';
import styled from 'styled-components';
import StatisticsTop from '../components/Statistics/StatisticsTop';

const Top = styled.div``;
const Content = styled.div``;
const Bottom = styled.div``;

const Statistics = () => {
  return (
    <Layout>
      <Top>
        <StatisticsTop/>
      </Top>
      <Content>这里是统计页面的内容</Content>
      <Bottom>
        <Nav/>
      </Bottom>
    </Layout>
  );
};

export default Statistics;