import {useEffect, useState} from 'react';
import getRecordStorage from 'lib/getRecordStorage';

type Record = {
  tag: string
  tagId:number
  category: string
  remake: string
  amount: number
  createTime: string
}


const useRecord = () => {
  const [record, setRecord] = useState<Record[]>(getRecordStorage('recordList_react'));

  useEffect(()=>{
    window.localStorage.setItem('recordList_react', JSON.stringify(record));
  },[record])

  return {
    record,
    setRecord
  };

};

export default useRecord;