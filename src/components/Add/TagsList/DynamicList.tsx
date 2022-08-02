import Icon from '../../Icon';
import React, {useEffect, useState} from 'react';

type Props = {
  tag: string
  tagId: number
  remake: string
  setTagInfo: (
    tag: string,
    tagId: number,
    remake: string,
  ) => void
  tags: {
    id: number
    className: string
    remake: string
  }[]
}

const DynamicList: React.FC<Props> = (props) => {
  // 选中标签 id
  const [selectedTags, setSelectedTags] = useState<{ id: number, className: string }>({id: -1, className: ''});
  // 选中 id 点击事件
  const onSelectTag = (id: number, className: string) => {
    setSelectedTags({id, className});
  };

  useEffect(() => {
    setSelectedTags({id: -1, className: ''});
  }, [props.tags]);

  // 选中设置样式
  const getSelectedCss = (id: number, className: string) => {
    return (selectedTags.id === id && selectedTags.className === className) ? 'selected' : undefined;
  };
  return (
    <>
      {props.tags.map((item) => {
        return (
          <li key={item.id} onClick={
            () => {
              props.setTagInfo(item.className, item.id, item.remake);
              onSelectTag(item.id, item.className);
            }
          }>
            <div className={'one-icon ' + getSelectedCss(item.id, item.className)}>
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