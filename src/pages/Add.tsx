import Layout from 'components/Layout';
import InputPad from 'components/Add/InputPad';
import TagsList from 'components/Add/TagsList';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

const Top = styled.div`
  height: 80px;
  background: #79c79f;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;

  > div {
    font-size: 22px;
    margin: 0 10px;
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

  .close {
    position: absolute;
    right: 20px;
    font-size: 18px;
  }
`;
const Content = styled.div``;
const Bottom = styled.div``;

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

type Tags = {
  id: number
  className: string
  remake: string
}

const Add: React.FC = () => {
  const [category, setCategory] = useState<string>('out');

  const [tags, setTags] = useState<Tags[]>(outTags);

  const [inputRemake, setInputRemake] = useState<string>('');

  const [info, setInfo] = useState({
    amount: 0,
    category: 'out',
    remake: '',
    tag: '',
    tagId: -1,
    createTime: ''
  });
  return (

    <Layout>
      <Top>
        <div className={category === 'out' ? 'selected' : ''}
             onClick={() => {
               setCategory('out');
               if (!(info.category === 'out')) {
                 setInfo({
                   ...info,
                   category: 'out',
                   remake: '',
                   tag: '',
                   tagId: -1,
                 });
               }
               setTags(outTags);
             }}>支出
        </div>
        <div className={category === 'in' ? 'selected' : ''}
             onClick={() => {
               setCategory('in');
               if (!(info.category === 'in')) {
                 setInfo({
                   ...info,
                   category: 'in',
                   remake: '',
                   tag: '',
                   tagId: -1,
                 });
               }
               setTags(inTags);
             }}>收入
        </div>
        <Link to="/" className="close">取消</Link>
      </Top>
      <Content>
        <TagsList tag={info.tag}
                  tagId={info.tagId}
                  remake={info.remake}
                  tags={tags}
                  setTagInfo={(tag, tagId, remake) => {
                    setInfo({
                      ...info,
                      tag: tag,
                      tagId: tagId,
                      remake: remake,
                    });
                  }}/>
      </Content>
      <Bottom>
        <InputPad amount={info.amount}
                  inputRemake={inputRemake}
                  setAmount={(amount) => {
                    setInfo({
                      ...info,
                      amount: amount
                    });
                  }}
                  setRemake={(remake) => {
                    setInputRemake(remake);
                  }}
                  done={() => {
                    console.log(info);
                    console.log(inputRemake);
                    console.log('点击了完成');
                  }}/>
      </Bottom>
    </Layout>
  );
};

export default Add;