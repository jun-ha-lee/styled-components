import styled from "styled-components"; // 스타일 컴포넌트 사용

// 백틱사용
const Father = styled.div` 
  // display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.boxColor}; // 아래 bgColor을 props로 받아서 사용
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)` // Box의 모든속성을 들고 온다
  border-radius: 50px;
`;

const Text = styled.span`
  color: #ffffff;
`;

const Btn = styled.button`
  color: #fff;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })` // .attrs({})를 사용하므로써 input으로 전달될 모든 속성을 가진 오브젝트를 담을수있다
  background-color: red;
`;


function App() {
  return (
    <Father as='header'>{/* 위에 Father라는 스타일을 여기다 넣는다 */}
      <Box boxColor='teal'>{/* Box 배경색을 위한 boxColor라는 prop생성 */}
        <Text>Hello</Text>
      </Box>
      <Box boxColor='tomato' />
      <Circle boxColor='yellow' />
      <Btn>Login</Btn>
      <Btn as='a' href='/'>Login</Btn>{/* Btn스타일을 사용하면서 a를 쓰고싶다 as='a' */}
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
