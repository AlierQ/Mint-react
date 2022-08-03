import Layout from 'components/Layout';
import Nav from 'components/Nav';
import styled from 'styled-components';
import CurrentMonthSum from 'components/Detail/CurrentMonthSum';
import RecordList from 'components/Detail/RecordList';
import getDateAndWeek from 'lib/getDateAndWeek';
import recordGroup from 'lib/recordGroup';
import useRecord from 'useRecord';
import sortDateMax from 'lib/sortDateMax';
import calculateSum from 'lib/calculateSum';

const Top = styled.div``;
const Content = styled.div``;
const Bottom = styled.div``;

const Detail = () => {
  const {record} = useRecord();
  sortDateMax(record);
  const recordData = recordGroup(getDateAndWeek, record);
  calculateSum(recordData);

  return (
    <Layout>
      <Top>
        <CurrentMonthSum/>
      </Top>
      <Content>
        <RecordList recordData={recordData}/>
      </Content>
      <Bottom>
        <Nav/>
      </Bottom>
    </Layout>
  );
};

export default Detail;