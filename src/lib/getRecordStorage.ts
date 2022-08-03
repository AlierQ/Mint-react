const getRecordStorage = (key: string) => {
  const record = window.localStorage.getItem(key);
  if (record === null) {
    return [];
  } else {
    return JSON.parse(record);
  }
};

export default getRecordStorage;