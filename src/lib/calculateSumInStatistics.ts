type Group = {
  sum?: number
  title: string
  items: {
    tag: string
    tagId: number
    category: string
    remake: string
    amount: number
    createTime: string
  }[]
}
const calculateSumInStatistics = (array: Group[]) => {
  array.forEach((group) => {
    group.sum = group.items.reduce((sum, item) => {
      return sum + item.amount;
    }, 0);
  });
};

export default calculateSumInStatistics;