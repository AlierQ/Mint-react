import Nav from 'components/Nav';
import Layout from 'components/Layout';
import styled from 'styled-components';
import StatisticsTop from '../components/Statistics/StatisticsTop';
import {useState} from 'react';

const Top = styled.div``;
const Content = styled.div``;
const Bottom = styled.div``;

const Statistics = () => {
  const [category, setCategory] = useState<string>('out');

  const [groupType, setGroupType] = useState<string>('week');

  return (
    <Layout>
      <Top>
        <StatisticsTop category={category}
                       groupType={groupType}
                       updateCategory={(value: string) => {
                         setCategory(value);
                       }}
                       updateGroupType={(value: string) => {
                         setGroupType(value)
                       }}/>
      </Top>
      <Content>这里是统计页面的内容</Content>
      <Bottom>
        <Nav/>
      </Bottom>
    </Layout>
  );
};

export default Statistics;