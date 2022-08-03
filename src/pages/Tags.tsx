import Layout from 'components/Layout';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Icon from 'components/Icon';
import React, {useState} from 'react';
import TagsEditList from '../components/Tags/TagsEditList';

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

const outTags = [
  {className: 'catering', remake: '餐饮', id: 1},
  {className: 'shopping', remake: '购物', id: 2},
  {className: 'dayuse', remake: '日用', id: 3},
  {className: 'traffic', remake: '交通', id: 4},
  {className: 'sport', remake: '运动', id: 5},
  {className: 'pet', remake: '宠物', id: 6},
  {className: 'recreation', remake: '娱乐', id: 7},
];

const inTags = [
  {className: 'parttime', remake: '兼职', id: 1},
  {className: 'wage', remake: '工资', id: 2},
  {className: 'licai', remake: '理财', id: 3},
  {className: 'otherrevenue', remake: '其他', id: 4},
];

type TagsType = {
  id: number
  className: string
  remake: string
}

const Tags: React.FC = () => {
  const [category, setCategory] = useState<string>('out');

  const [tags, setTags] = useState<TagsType[]>(outTags);

  const toggleCategory = (category: string) => {
    setCategory(category);
    if (category === 'out') {
      setTags(outTags);
    } else {
      setTags(inTags);
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
                        setTags(tags.filter((item) => {
                          return item.id !== id || item.className !== className;
                        }));
                        console.log(id, className);
                      }}/>
      </Content>
      <Bottom>
        <Link to="/tagsadd">
          <div>+添加标签</div>
        </Link>
      </Bottom>
    </Layout>
  );
};

export default Tags;