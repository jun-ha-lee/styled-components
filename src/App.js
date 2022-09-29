import styled from "styled-components"; // 스타일 컴포넌트 사용

// 백틱사용
const Father = styled.div` 
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: #ffffff;
`;

function App() {
  return (
    <Father>{/* 위에 Father라는 스타일을 여기다 넣는다 */}
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}

export default App;
