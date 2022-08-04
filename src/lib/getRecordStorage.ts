const getRecordStorage = (key: string) => {
  const record = window.localStorage.getItem(key);
  if (record === null) {
    // return [];
    return [  // 默认数据，为了更好的展示
      {
        amount: 60,
        category: 'in',
        remake: '兼职赚了点',
        tag: 'parttime',
        tagId: 1,
        createTime: '2022-08-04T08:15:30.600Z'
      }, {
        amount: 15.2,
        category: 'out',
        remake: '买甜品吃',
        tag: 'snacks',
        tagId: 11,
        createTime: '2022-08-04T08:15:12.239Z'
      }, {
        amount: 30,
        category: 'out',
        remake: '买球拍',
        tag: 'sport',
        tagId: 5,
        createTime: '2022-08-03T16:29:21.427Z'
      }, {
        amount: 100,
        category: 'out',
        remake: '买礼物给女朋友',
        tag: 'gift',
        tagId: 8,
        createTime: '2022-08-03T16:24:16.283Z'
      }, {
        amount: 20,
        category: 'out',
        remake: '日常用品',
        tag: 'dayuse',
        tagId: 3,
        createTime: '2022-08-03T14:43:25.691Z'
      }, {
        amount: 15,
        category: 'out',
        remake: '购物',
        tag: 'shopping',
        tagId: 2,
        createTime: '2022-08-02T14:37:22.863Z'
      }, {
        amount: 200,
        category: 'out',
        remake: '旅行',
        tag: 'travel',
        tagId: 9,
        createTime: '2022-07-25T16:28:45.163Z'
      }, {
        amount: 50,
        category: 'out',
        remake: '唱歌',
        tag: 'recreation',
        tagId: 7,
        createTime: '2022-06-03T15:59:20.456Z'
      }, {
        amount: 1000,
        category: 'in',
        remake: '工资',
        tag: 'wage',
        tagId: 2,
        createTime: '2022-06-03T14:43:51.996Z'
      }
    ];
  } else {
    return JSON.parse(record);
  }
};

export default getRecordStorage;