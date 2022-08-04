import {useEffect, useState} from 'react';
import getTagsStorage from 'lib/getTagsStorage';
type TagsType = {
  id: number
  className: string
  remake: string
}

const useTags = () => {
  const [outTags, setOutTags] = useState<TagsType[]>(getTagsStorage('outTags_react'));

  const [inTags, setInTags] = useState<TagsType[]>(getTagsStorage('inTags_react'));

  useEffect(() => {
    window.localStorage.setItem('inTags_react', JSON.stringify(inTags));
  }, [inTags]);

  useEffect(() => {
    window.localStorage.setItem('outTags_react', JSON.stringify(outTags));
  }, [outTags]);

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