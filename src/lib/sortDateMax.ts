import dayjs from 'dayjs';

type Record = {
  tag: string
  tagId: number
  category: string
  remake: string
  amount: number
  createTime: string
}

const sortDateMax = (recordList: Record[]) => {
  recordList.sort((a: Record, b: Record) => {
    return dayjs(b.createTime).valueOf() - dayjs(a.createTime).valueOf();
  });
};

export default sortDateMax;