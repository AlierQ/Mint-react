type Record = {
  tag: string
  tagId: number
  category: string
  remake: string
  amount: number
  createTime: string
}

const recordGroup = (groupFn: Function, recordList: Record[]) => {
  let array = [
    {title: groupFn(recordList[0].createTime), items: [recordList[0]]},
  ];
  for (let i = 1; i < recordList.length; i++) {
    const last = array.length - 1;
    if (groupFn(recordList[i].createTime) === array[last].title) {
      array[last].items.push(recordList[i]);
    } else {
      array.push({
        title: groupFn(recordList[i].createTime),
        items: [recordList[i]],
      });
    }
  }
  return array;
};

export default recordGroup;