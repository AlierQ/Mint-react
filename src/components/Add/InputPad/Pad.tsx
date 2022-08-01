import styled from 'styled-components';
import Icon from 'components/Icon';
import React, {useState} from 'react';

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

const Pad: React.FC = () => {
  // 存储输入的数字
  const [outNumber, setOutNumber] = useState<string>('0');

  // 输入数据
  const inputNumber = (el: HTMLTableDataCellElement) => {
    const str = el.textContent;
    if (el) {
      // 没有小数点的请情况下长度最长为16位
      if (outNumber.indexOf('.') === -1 && outNumber.length === 16) {
        return;
      }
      // 小数点之后只能有两位
      if (outNumber.indexOf('.') !== -1) {
        if (outNumber.length === outNumber.indexOf('.') + 3) {
          return;
        }
      }
      // 处理多次输入"."
      if (str === '.') {
        if (!(outNumber.indexOf('.') !== -1)) {
          setOutNumber((value) => value + str);
        }
      } else {
        // 处理0的问题
        if (outNumber === '0') {
          if (str === '0') {
            return;
          } else {
            setOutNumber(str as string);
          }
        } else {
          setOutNumber((value) => value + str);
        }
      }
    }
  };

  // 删除键
  const deleteNumber = () => {
    if (outNumber.length - 1 === 0) {
      setOutNumber('0');
    } else {
      setOutNumber(outNumber.slice(0, -1));
    }
  };

  // 清空键
  const emptyNumber = () => {
    setOutNumber('0');
  };
  return (
    <Wrapper>
      <table>
        <tbody>
        <tr>
          {
            ['7', '8', '9'].map((item) => {
              return (
                <td key={item} onClick={(e: React.MouseEvent) => {
                  inputNumber(e.target as HTMLTableDataCellElement);
                }}
                >{item}</td>
              );
            })
          }
          <td className="characters" onClick={
            () => {
              emptyNumber();
            }
          }>清空
          </td>
        </tr>
        <tr>
          {
            ['4', '5', '6'].map((item) => {
              return (
                <td key={item} onClick={(e: React.MouseEvent) => {
                  inputNumber(e.target as HTMLTableDataCellElement);
                }}
                >{item}</td>
              );
            })
          }
          <td className="icon" onClick={() => {
            deleteNumber();
          }}>
            <Icon name="clear" color="#333" size="26"/>
          </td>
        </tr>
        <tr>
          {
            ['1', '2', '3'].map((item) => {
              return (
                <td key={item} onClick={(e: React.MouseEvent) => {
                  inputNumber(e.target as HTMLTableDataCellElement);
                }}
                >{item}</td>
              );
            })
          }
          <td className="characters done" rowSpan={2}>完成</td>
        </tr>
        <tr>
          {
            ['0', '.'].map((item) => {
              return (
                <td key={item} colSpan={item === '0' ? 2 : 0} onClick={(e: React.MouseEvent) => {
                  inputNumber(e.target as HTMLTableDataCellElement);
                }}
                >{item}</td>
              );
            })
          }
        </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Pad;