import React from "react";
import ReactDom from "react-dom";

// function name을 대문자로 시작해야 component라는 것을 인식한다
// Component를 작성하기 위해서는 먼저, React를 import 해야한다.(from 'react')
// 정식명칭 : stateless functional component
// always return JSX
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>daseul</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

// JSX를 실제로 render하기 위해서는, 아래와 같이 ReactDom.render함수에
// ReactDom.render({무엇을 랜더할 것인지}, {어디에 랜더할 것인지}) 두가지 인자를 넘겨주어야 한다.
// index.js는 js의 entry point로서, entry point 구조를 정의한다.
// ReactDom.render는 원하는 js코드를 html에서 실행시키고 싶을 때 사용하는 함수이다.
ReactDom.render(<Greeting />, document.getElementById("root"));
