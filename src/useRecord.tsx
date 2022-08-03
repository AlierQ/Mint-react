import {useEffect, useState} from 'react';
import getRecordStorage from 'lib/getRecordStorage';

type Record = {
  tag: string
  category: string
  remake: string
  amount: number
  createTime: string
}


const useRecord = () => {
  const [record, setRecord] = useState<Record[]>(getRecordStorage('recordList'));

  useEffect(()=>{
    window.localStorage.setItem('recordList', JSON.stringify(record));
  },[record])

  return {
    record,
    setRecord
  };

};

export default useRecord;