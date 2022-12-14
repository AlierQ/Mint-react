import Layout from 'components/Layout';
import Icon from 'components/Icon';
import styled from 'styled-components';
import {useState} from 'react';
import TagsAddInput from '../components/TagsAdd/TagsAddInput';
import TagsAddIconList from '../components/TagsAdd/TagsAddIconList';
import {Link, useNavigate, useParams} from 'react-router-dom';
import useTags from 'useTags';
import createId from 'lib/createId';


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
    justify-content: center;

    .icon {
      margin-top: 2px;
    }

    .backtext {
      font-size: 18px;
      margin-left: 2px;
    }
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
  const {tagsData, setTagsData} = useTags();

  let {category} = useParams();

  const [tagsAddList] = useState<TagsAddListType[]>(TagsAddList);

  const [iconRemake, setIconRemake] = useState<string>('');

  const [selectedIcon, setSelectedIcon] = useState<string>('shopping');

  let navigate = useNavigate();
  const doneAdd = () => {
    if (iconRemake === '') {
      alert('请输入类别名！');
    } else {
      if (iconRemake.length > 4) {
        alert('类别名太长！');
      } else {
        setTagsData(category as string,
          [
            ...tagsData(category as string),
            {className: selectedIcon, remake: iconRemake, id: createId(category) as number}
          ]);
        // 为了在setTagsData异步之后紧接着执行
        setTimeout(() => {
          navigate('/tags');
        }, 0);
      }
    }
  };
  return (
    <Layout>
      <Top>
        <div className="back">
          <div className="icon">
            <Icon name="back" color="#333333" size="18"/>
          </div>
          <Link to="/tags">
            <div className="backtext">返回</div>
          </Link>
        </div>
        <div className="title">
          添加类别
        </div>
        <div className="done" onClick={() => {
          doneAdd();
        }}>
          完成
        </div>
      </Top>
      <Content>
        <TagsAddInput
          iconRemake={iconRemake}
          selectedIcon={selectedIcon}
          setRemake={(remake: string) => {
            setIconRemake(remake);
          }}
        />
        <TagsAddIconList
          tagsAddList={tagsAddList}
          setSelected={(selectedIcon: string) => {
            setSelectedIcon(selectedIcon);
          }}
        />
      </Content>
      <Bottom>
      </Bottom>
    </Layout>
  );
};

export default TagsAdd;