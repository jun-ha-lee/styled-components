import styled, { keyframes } from "styled-components"; // 스타일 컴포넌트 사용, keyframes사용
import { useState } from "react";
// 백틱사용
const Father = styled.div` 
  // display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.boxColor}; // 아래 boxColor을 props로 받아서 사용
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
// arrts로 공통된 스타일을 넣을 수 있음
  background-color: red;
`;

// 애니메이션 만들기

const rotationAni = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 56px;
`;

const Box2 = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAni} 1s linear infinite; // 애니메이션 추가
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} { // Emoji컴포넌트를 가져온다
    &:hover { // span자기 자신을 hover한다. span:hover와 같음
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
// end

// 다크모드

const Title = styled.h1`
  color: ${props => props.theme.textColor}; // index.js에서 가져온다
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor}; // index.js에서 가져온다
`;

const ChangeBtn = ({ btnText, changeValue }) => {
  const [mode, setMode] = useState(true);
  const onMode = () => {
    setMode((currentMode) => !currentMode);
  }
  return (
    <button onClick={onMode}>{mode === true ? 'darkTheme' : 'lightTheme'}</button>
  );
  // return (
  //   <button
  //     onClick={changeValue}
  //   >{btnText}</button>
  // );
}

function App() {
  const [btnValue, setBtnValue] = useState('darkTheme');
  const changeValue = () => {
    return (
      setBtnValue('lightTheme')
    );
  }

  return (
    <Father as='header'>{/* 위에 Father라는 스타일을 여기다 넣는다, header태그로 바꾼다 */}
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
      <br />
      <Box2>
        <Emoji>😀</Emoji>
      </Box2>
      <Emoji as='p'>😀</Emoji>{/* Emoji스타일을 사용하면서 p태그 사용 */}
      <br />
      <Wrapper>
        <ChangeBtn btnText={btnValue} changeValue={changeValue}></ChangeBtn>
        <Title>hello</Title>
      </Wrapper>
    </Father>
  );
}

export default App;
