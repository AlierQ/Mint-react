import Icon from '../../Icon';
import React, {useState} from 'react';

const out = [
  {className: 'catering', remake: '餐饮', id: 1},
  {className: 'shopping', remake: '购物', id: 2},
  {className: 'dayuse', remake: '日用', id: 3},
  {className: 'traffic', remake: '交通', id: 4},
  {className: 'sport', remake: '运动', id: 5},
  {className: 'pet', remake: '宠物', id: 6},
  {className: 'recreation', remake: '娱乐', id: 7},
];

// 自定义标签ts类型
type Tags = {
  id: number
  className: string
  remake: string
}

const DynamicList: React.FC = () => {
  const [tags, setTags] = useState<Tags[]>(out);
  // 选中标签 id
  const [selectedTagsID, setSelectedTagsID] = useState<number>(-1);
  // 选中 id 点击事件
  const onSelectTag = (id: number) => {
    setSelectedTagsID(id);
  };
  // 选中设置样式
  const getSelectedCss = (id: number) => {
    return selectedTagsID === id ? 'selected' : undefined;
  };
  return (
    <>
      {tags.map((item) => {
        return (
          <li key={item.id} onClick={
            () => {
              onSelectTag(item.id);
            }
          }>
            <div className={'one-icon ' + getSelectedCss(item.id)}>
              <Icon name={item.className} color="#545353" size="32"/>
            </div>
            <div className="label">{item.remake}</div>
          </li>
        );
      })}
    </>
  );
};

export default DynamicList;