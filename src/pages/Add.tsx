import Layout from 'components/Layout';
import InputPad from 'components/Add/InputPad';
import TagsList from 'components/Add/TagsList';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import useTags from 'useTags';

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

type Tags = {
  id: number
  className: string
  remake: string
}

const Add: React.FC = () => {
  const {tagsData} = useTags();

  const initInfo = {
    amount: 0,
    category: 'out',
    remake: '',
    tag: '',
    tagId: -1,
    createTime: ''
  };

  const [category, setCategory] = useState<string>('out');

  const [tags, setTags] = useState<Tags[]>(tagsData('out'));

  const [inputRemake, setInputRemake] = useState<string>('');

  const [info, setInfo] = useState(initInfo);

  const onChange = (obj: Partial<typeof info>) => {
    setInfo({
      ...info,
      ...obj
    });
  };

  // 切换收入支出
  const toggleCategory = (category: string) => {
    setCategory(category);
    if (!(info.category === category)) {
      onChange({...initInfo, category: category});
    }
    if (category === 'out') {
      setTags(tagsData('out'));
    } else {
      setTags(tagsData('in'));
    }

  };

  return (

    <Layout>
      <Top>
        <div className={category === 'out' ? 'selected' : ''}
             onClick={() => {
               toggleCategory('out');
             }}>支出
        </div>
        <div className={category === 'in' ? 'selected' : ''}
             onClick={() => {
               toggleCategory('in');
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
                    onChange({tag, tagId, remake});
                  }}/>
      </Content>
      <Bottom>
        <InputPad amount={info.amount}
                  inputRemake={inputRemake}
                  setAmount={(amount) => {
                    onChange({amount});
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