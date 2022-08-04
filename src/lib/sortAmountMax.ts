type Group = {
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

const sortAmountMax = (array: Group[]) => {
  for (let i = 0; i < array.length; i++) {
    array[i].items.sort((a: any, b: any) => {
      return b.amount - a.amount;
    });
  }
};

export default sortAmountMax;