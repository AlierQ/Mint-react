import Layout from 'components/Layout';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Icon from 'components/Icon';
import React, {useState} from 'react';
import TagsEditList from 'components/Tags/TagsEditList';
import useTags from 'useTags';

const Top = styled.div`
  height: 130px;
  background: #79c79f;
  display: flex;
  color: #333333;
  flex-direction: column;
  justify-content: flex-end;

  .back-and-title {
    display: flex;
    justify-content: center;

    .back {
      position: absolute;
      padding-top: 5px;
      left: 15px;
      display: flex;
      align-items: center;

      span {
        line-height: 24px;
        vertical-align: baseline;
        font-size: 18px;
        margin-left: 4px;
      }
    }

    .title {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }

  .in-and-out {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    > div {
      font-size: 20px;
      margin: 0 40px;
      position: relative;

      &.selected {
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #333;
        }
      }
    }
  }
`;
const Content = styled.div``;
const Bottom = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    font-size: 20px;
  }
`;

type TagsType = {
  id: number
  className: string
  remake: string
}

const Tags: React.FC = () => {
  const {tagsData, setTagsData} = useTags();

  const [category, setCategory] = useState<string>('out');

  const [tags, setTags] = useState<TagsType[]>(tagsData('out'));

  const toggleCategory = (category: string) => {
    setCategory(category);
    if (category === 'out') {
      setTags(tagsData('out'));
    } else {
      setTags(tagsData('in'));
    }
  };
  return (
    <Layout>
      <Top>
        <div className="back-and-title">
          <Link to="/add" className="back">
            <Icon name="back" color="#333" size="18"/>
            <span>返回</span>
          </Link>
          <div className="title">
            标签设置
          </div>
        </div>
        <div className="in-and-out">
          <div className={category === 'out' ? 'selected' : ''}
               onClick={
                 () => {
                   toggleCategory('out');
                 }
               }>支出
          </div>
          <div className={category === 'in' ? 'selected' : ''}
               onClick={
                 () => {
                   toggleCategory('in');
                 }
               }>收入
          </div>
        </div>
      </Top>
      <Content>
        <TagsEditList tags={tags}
                      deleteTag={(id: number, className: string) => {
                        const temp = tags.filter((item) => {
                          return item.id !== id || item.className !== className;
                        });
                        // 保证UI更新
                        setTags(temp);
                        // 保证localstorage中的数据更新
                        setTagsData(category, temp);
                      }}/>
      </Content>
      <Bottom>
        <Link to={"/tagsadd/" + category} >
          <div>+添加标签</div>
        </Link>
      </Bottom>
    </Layout>
  );
};

export default Tags;