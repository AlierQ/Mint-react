import Nav from 'components/Nav';
import Layout from 'components/Layout';
import styled from 'styled-components';
import StatisticsTop from '../components/Statistics/StatisticsTop';
import {useState} from 'react';
import StatisticsDatalist from '../components/Statistics/StatisticsDatalist';

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
                         setGroupType(value);
                       }}/>
      </Top>
      <Content>
        <StatisticsDatalist/>
      </Content>
      <Bottom>
        <Nav/>
      </Bottom>
    </Layout>
  );
};

export default Statistics;