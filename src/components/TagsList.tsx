import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Icon from 'components/Icon';

const out = [
  {className: 'catering', remake: '餐饮', id: 1},
  {className: 'shopping', remake: '购物', id: 2},
  {className: 'dayuse', remake: '日用', id: 3},
  {className: 'traffic', remake: '交通', id: 4},
  {className: 'sport', remake: '运动', id: 5},
  {className: 'pet', remake: '宠物', id: 6},
  {className: 'recreation', remake: '娱乐', id: 7},
];

const List = styled.div`
  display: flex;
  justify-content: center;

  ul {
    margin-top: 40px;
    width: 96vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, 70px);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    justify-content: center;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > .one-icon {
        border-radius: 50%;
        background: #F5F5F5;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          width: 32px;
          height: 32px;
          fill: #545353;
        }

        &.selected {
          background: #79c79f;
        }
      }

      > .label {
        text-align: center;
        color: #333333;
      }
    }
  }
`;

const TagsList = () => {
  return (
    <List>
      <ul>
        {
          out.map((item) => {
            return (
              <li key={item.id}>
                <div className="one-icon" >
                  <Icon className={item.className} color="#545353" size="32"/>
                </div>
                <div className="label">{item.remake}</div>
              </li>
            );
          })
        }
        <li>
          <Link to="/label" className="one-icon">
            <Icon className="setting" color="#545353" size="32"/>
          </Link>
          <div className="label">设置</div>
        </li>
      </ul>
    </List>
  );
};

export default TagsList;