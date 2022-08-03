import {useEffect, useState} from 'react';
import getTagsStorage from 'lib/getTagsStorage';
type TagsType = {
  id: number
  className: string
  remake: string
}

const useTags = () => {
  const [outTags, setOutTags] = useState<TagsType[]>(getTagsStorage('outTags'));

  const [inTags, setInTags] = useState<TagsType[]>(getTagsStorage('inTags'));

  useEffect(() => {
    window.localStorage.setItem('inTags', JSON.stringify(inTags));
  }, [inTags]);

  useEffect(() => {
    window.localStorage.setItem('outTags', JSON.stringify(outTags));
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