import styled from 'styled-components';
import Icon from 'components/Icon';

const Wrapper = styled.div`
  width: 100vw;
  flex-grow: 1;

  table {
    border-spacing: 0; /*把单元格间隙设置为0*/
    border-collapse: collapse;
    border: none;
    flex-direction: column;
    width: 100%;
    height: 100%;
    table-layout: fixed;

    tr {
      td {
        border: 1px solid #E8E8E8;
        color: #333333;
        font-size: 22px;
        text-align: center;

        &.icon {
          border: none;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .characters {
        font-size: 18px;
      }

      .done {
        background: #79c79f;
        border: 0;
      }
    }
  }
`;

const Pad = () => {
  return (
    <Wrapper>
      <table>
        <tbody>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td className="characters">清空</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td className="icon">
            <Icon name="clear" color="#333" size="26"/>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td className="characters done" rowSpan={2}>完成</td>
        </tr>
        <tr>
          <td colSpan={2}>0</td>
          <td>.</td>
        </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Pad;