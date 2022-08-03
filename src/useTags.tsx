import {useState} from 'react';

type TagsType = {
  id: number
  className: string
  remake: string
}

const useTags = () => {
  const [outTags, setOutTags] = useState<TagsType[]>([
    {className: 'catering', remake: '餐饮', id: 1},
    {className: 'shopping', remake: '购物', id: 2},
    {className: 'dayuse', remake: '日用', id: 3},
    {className: 'traffic', remake: '交通', id: 4},
    {className: 'sport', remake: '运动', id: 5},
    {className: 'pet', remake: '宠物', id: 6},
    {className: 'recreation', remake: '娱乐', id: 7},
  ]);

  const [inTags, setInTags] = useState<TagsType[]>([
    {className: 'parttime', remake: '兼职', id: 1},
    {className: 'wage', remake: '工资', id: 2},
    {className: 'licai', remake: '理财', id: 3},
    {className: 'otherrevenue', remake: '其他', id: 4},
  ]);


  const getTagsData = (category: string) => {
    if (category === 'out') {
      return outTags;
    } else {
      return inTags;
    }
  };

  const setTagsData = (category: string, tags: TagsType[]) => {
    if (category === 'out') {
      setOutTags(tags);
    } else {
      setInTags(tags);
    }
  };

  return {
    tagsData: getTagsData,
    setTagsData
  };
};

export default useTags;