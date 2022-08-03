import Layout from 'components/Layout';
import Icon from 'components/Icon';
import styled from 'styled-components';
import {useState} from 'react';
import TagsAddInput from '../components/TagsAdd/TagsAddInput';

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

  .icon-list {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    .icon-title {
      margin-top: 10px;
      text-align: center;
    }

    ul {
      margin-top: 5px;
      margin-bottom: 10px;
      width: 90vw;
      display: grid;
      grid-template-columns: repeat(auto-fill, 40px);
      grid-column-gap: 34px;
      grid-row-gap: 20px;
      justify-content: center;

      li {
        > .one-icon {
          border-radius: 50%;
          background: #F5F5F5;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
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
        <div className="icon-list">
          {
            tagsAddList.map((item) => {
              return (
                <div>
                  <div className="icon-title">{item.title}</div>
                  <ul>
                    {
                      item.icons.map((className) => {
                        return (
                          <li>
                            <div className="one-icon">
                              <Icon name={className} color="#545353" size="28"/>
                            </div>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              );
            })
          }
        </div>
      </Content>
      <Bottom>
      </Bottom>
    </Layout>
  );
};

export default TagsAdd;