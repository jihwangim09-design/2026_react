//[필수] 1. 리액트 라이브러리 최초 렌더링(그리기)하는 함수
import { createRoot } from "react-dom/client";
//[필수] 2. index.html 에서 root 마크업 가져오기 , #ID , .Class
const root = document.querySelector( '#root' )
//[필수] 3. 가져온 root 마크업을 createRoot 함수에 전달한다.
const create = createRoot( root );

// [선택] 최초로 화면을 그리기 할 컴포넌트 가져와서 렌더링
// 1. import 이용하여 컴포넌트 가져온다.
// import App from './App.jsx'
// 2. 가져온 컴포넌트 렌더링하기
// create.render( <App> </App> )
// [day01] render는 1번만 가능하므로 예제 컴포넌트 변경
// import MyMarkup from "./example/day01/MyMarkup";
// create.render( <MyMarkup> </MyMarkup>)

// import Component1 from "./example/day01/Component1";
// create.render( <Component1> </Component1>)

// import Component5 from "./example/day01/Component5";
// create.render( <Component5> </Component5>)

// import practice1 from "./example/practice/practice1";
// create.render( <practice1> </practice1>)

// import Component1 from "./example/day02/Component1";
// create.render( <Component1> </Component1>)

// import Productmanager from "./example/day02/totalpractice/ProductManager.jsx"
// create.render( <Productmanager /> )

// import Component2 from "./example/day03/Component2";
// create.render( <Component2 /> )

// import practice2 from "./example/practice/practice2";
// create.render( <practice2/>)

// import { BrowserRouter } from "react-router-dom"; // 라우터 라이브러리 가져오기
// import App2 from "./example/practice3/App";
// 2. 최조 렌더링 되는 컴포넌트 앞뒤로 라우터컴포넌트 감싼다.
// create.render( <BrowserRouter> <App2/> </BrowserRouter>)

{/* 최초 렌더링 컴포넌트 감싼다. */}
import App from "./example/day05/App";
import { BrowserRouter } from "react-router-dom";
create.render( 
    <BrowserRouter>
    <App/> 
    </BrowserRouter>
)