import Layout from 'components/Layout';
import Icon from 'components/Icon';
import styled from 'styled-components';
import {useState} from 'react';
import TagsAddInput from '../components/TagsAdd/TagsAddInput';
import TagsAddIconList from '../components/TagsAdd/TagsAddIconList';

const Top = styled.div`
  height: 10vh;
  background: #79c79f;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;

  .back {
    display: flex;
    margin-left: 10px;
    font-size: 18px;
  }

  .title {
    font-size: 22px;
    padding-bottom: 8px;
  }

  .done {
    margin-right: 15px;
    font-size: 18px;
  }
`;
const Content = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
`;
const Bottom = styled.div``;

const TagsAddList = [
  {
    title: '支出',
    icons: [
      'catering',
      'shopping',
      'dayuse',
      'traffic',
      'vegetable',
      'fruits',
      'snacks',
      'sport',
      'recreation',
      'communication',
      'costume',
      'work',
      'pet',
      'gift',
      'travel',
      'beauty',
      'car',
      'digital',
      'maintain',
      'study',
      'medical',
      'book',
      'movie',
      'house',
      'transfer_accounts',
      'furniture',
      'child',
      'oldman',
      'social_contact',
      'cigarette_wine',
      'lottery',
    ],
  },
  {
    title: '收入',
    icons: [
      'parttime',
      'wage',
      'licai',
      'cashgift',
      'otherrevenue',
      'auction',
    ],
  },
];

type TagsAddListType = {
  title: string
  icons: string[]
}

const TagsAdd = () => {
  const [tagsAddList, setTagsAddList] = useState<TagsAddListType[]>(TagsAddList);

  return (
    <Layout>
      <Top>
        <div className="back">
          <div>
            <Icon name="back" color="#333333" size="18"/>
          </div>
          <div>返回</div>
        </div>
        <div className="title">
          添加类别
        </div>
        <div className="done">
          完成
        </div>
      </Top>
      <Content>
        <TagsAddInput/>
        <TagsAddIconList tagsAddList={tagsAddList}/>
      </Content>
      <Bottom>
      </Bottom>
    </Layout>
  );
};

export default TagsAdd;