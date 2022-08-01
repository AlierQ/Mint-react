import Icon from '../../Icon';

const out = [
  {className: 'catering', remake: '餐饮', id: 1},
  {className: 'shopping', remake: '购物', id: 2},
  {className: 'dayuse', remake: '日用', id: 3},
  {className: 'traffic', remake: '交通', id: 4},
  {className: 'sport', remake: '运动', id: 5},
  {className: 'pet', remake: '宠物', id: 6},
  {className: 'recreation', remake: '娱乐', id: 7},
];

const DynamicList = () => {
  return (
    <>
      {out.map((item) => {
        return (

          <li key={item.id}>
            <div className="one-icon">
              <Icon name={item.className} color="#545353" size="32"/>
            </div>
            <div className="label">{item.remake}</div>
          </li>

        );
      })}
    </>
  );
};

export default DynamicList;