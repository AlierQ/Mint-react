import Nav from 'components/Nav';
import Layout from 'components/Layout';
import styled from 'styled-components';
import StatisticsTop from 'components/Statistics/StatisticsTop';
import {useState} from 'react';
import StatisticsDatalist from 'components/Statistics/StatisticsDatalist';
import useRecord from 'useRecord';
import sortDateMax from 'lib/sortDateMax';
import recordGroup from 'lib/recordGroup';
import getWeekOfYear from 'lib/getWeekOfYear';
import sortAmountMax from 'lib/sortAmountMax';
import calculateSumInStatistics from 'lib/calculateSumInStatistics';
import getMonthOfYear from 'lib/getMonthOfYear';
import getYear from 'lib/getYear';

const Top = styled.div``;
const Content = styled.div``;
const Bottom = styled.div``;

type GroupData = {
  sum?: number
  title: string
  items: {
    tag: string
    tagId: number
    category: string
    remake: string
    amount: number
    createTime: string
  }[]
}

const Statistics = () => {
  const [category, setCategory] = useState<string>('out');

  const [groupType, setGroupType] = useState<string>('week');

  const {record} = useRecord();

  const recordList = () => {
    return record.filter((record) => {
      return record.category === category;
    });
  };

  const getGroup = (groupType: string) => {
    const recordData = recordList();
    let array = undefined;
    if (recordData.length === 0)
      return [];
    sortDateMax(recordData);
    if (groupType === 'week') {
      array = recordGroup(getWeekOfYear, recordData);
    } else if (groupType === 'month') {
      array = recordGroup(getMonthOfYear, recordData);
    } else if (groupType === 'year') {
      array = recordGroup(getYear, recordData);
    }
    if (array !== undefined) {
      sortAmountMax(array);
      calculateSumInStatistics(array);
    }
    return array as GroupData[];
  };
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
        <StatisticsDatalist groupData={getGroup(groupType)}/>
      </Content>
      <Bottom>
        <Nav/>
      </Bottom>
    </Layout>
  );
};

export default Statistics;