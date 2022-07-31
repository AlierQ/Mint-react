import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Top = styled.div`
  //border: 1px solid yellow;
`;
const Content = styled.div`
  //border: 1px solid blue;
  flex-grow: 1;
`;
const Bottom = styled.div`
  //border: 1px solid red;
`;

const Layout = (props: any) => {

  if (props.children.length !== 3) {
    throw new Error('Layout should have three tabs inside');
  }
  return (
    <Wrapper>
      <Top>
        {props.children[0]}
      </Top>
      <Content>
        {props.children[1]}
      </Content>
      <Bottom>
        {props.children[2]}
      </Bottom>
    </Wrapper>
  );
};

export default Layout;