import Icon from 'components/Icon'
import styled from 'styled-components';
import Remake from 'components/Remake'

// 样式
const Wrapper = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OutPad = styled.div`
  text-align: right;
  color: #333333;
  font-size: 32px;
  padding-right: 10px;
  height: 60px;
  line-height: 60px;
  align-self: flex-end;
  font-family: Consolas, monospace;
`;

const Pad = styled.div`
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

const InputPad = ()=>{
  return(
    <Wrapper >
      <OutPad >01023</OutPad>
        <Remake />
      <Pad>
        <table>
          <tbody>
            <tr>
              <td >7</td>
              <td >8</td>
              <td >9</td>
              <td className="characters">清空</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td><Icon className="clear" color="#333" size="18"/></td>
            </tr>
            <tr>
              <td >1</td>
              <td >2</td>
              <td >3</td>
              <td className="characters done" rowSpan={2}>完成</td>
            </tr>
            <tr>
              <td colSpan={2}>0</td>
              <td>.</td>
            </tr>
          </tbody>
        </table>
      </Pad>
    </Wrapper>
  )
}

export default InputPad;