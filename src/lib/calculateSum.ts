type Record = {
  tag: string
  tagId: number
  category: string
  remake: string
  amount: number
  createTime: string
}

type RecordGroup = {
  inSum?:number
  outSum?:number
  title: string
  items: Record[]
}

const calculateSum = (array: RecordGroup[]) => {
  array.forEach((group: RecordGroup) => {
    group.inSum = group.items.reduce((sum: number, item: Record) => {
      if (item.category === 'in') {
        return sum + item.amount;
      } else {
        return sum;
      }
    }, 0);
    group.outSum = group.items.reduce((sum: number, item: Record) => {
      if (item.category === 'out') {
        return sum + item.amount;
      } else {
        return sum;
      }
    }, 0);
  });
};

export default calculateSum;