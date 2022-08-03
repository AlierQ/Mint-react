const getTagsStorage = (key: string) => {
  if (key === 'inTags') {
    if (window.localStorage.getItem(key) !== null) {
      return [
        {className: 'parttime', remake: '兼职', id: 1},
        {className: 'wage', remake: '工资', id: 2},
        {className: 'licai', remake: '理财', id: 3},
        {className: 'otherrevenue', remake: '其他', id: 4},
      ];
    } else {
      return JSON.parse(window.localStorage.getItem(key) as string);
    }
  } else if (key === 'outTags') {
    if (window.localStorage.getItem(key) !== null) {
      return [
        {className: 'catering', remake: '餐饮', id: 1},
        {className: 'shopping', remake: '购物', id: 2},
        {className: 'dayuse', remake: '日用', id: 3},
        {className: 'traffic', remake: '交通', id: 4},
        {className: 'sport', remake: '运动', id: 5},
        {className: 'pet', remake: '宠物', id: 6},
        {className: 'recreation', remake: '娱乐', id: 7},
      ];
    } else {
      return JSON.parse(window.localStorage.getItem(key) as string);
    }
  }

};

export default getTagsStorage;