import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Icon from 'components/Icon';
import DynamicList from 'components/Add/TagsList/DynamicList';

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
        <DynamicList/>
        <li>
          <Link to="/label" className="one-icon">
            <Icon name="setting" color="#545353" size="32"/>
          </Link>
          <div className="label">设置</div>
        </li>
      </ul>
    </List>
  );
};

export default TagsList;