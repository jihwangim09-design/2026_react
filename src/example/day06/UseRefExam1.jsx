import { useState, useRef } from "react";

export default function UseRef1(props) {
    // 훅 : 리액트에서 만든 다양한 함수들 ,컴포넌트와 연관 기능
    // useState, useEffect , useRef 등등
   
    const [stateNum, setStateNum] = useState(0); // 상태변수 state변수
    const refNum = useRef(0); // ref변수 참조변수
    let myNum = 0; // 지역변수

    // useState = 값도 저장하고, 화면도 다시 그림
    // setStateNum을 호출하면 값이 바뀌고, React가 컴포넌트를 다시 렌더링
    const plusState = () => {
        setStateNum(stateNum + 1);
        console.log('State증가', stateNum);
    }
    // useRef = 값은 저장하지만, 화면은 다시 안 그림
    // useRef(0)은 { current: 0 }이라는 객체를 하나 만들고 . 그 안의 .current라는 속성에 값을 저장
    // refNum.current를 바꿔도, useState와 달리 화면이 다시 그려지지 않음
    // "Ref증가" 버튼을 누르면, 콘솔에는 값이 증가하는 게 찍히지만 화면에 보이는 Ref : {refNum.current} 숫자는 그대로임
    const plusRef = () => {
        refNum.current = refNum.current + 1;
        console.log('Ref증가', refNum.current);
    }
    // 컴포넌트 함수(UseRef1)가 다시 실행될 때마다(=다시 렌더링될 때마다), myNum은 매번 0으로 초기화
    // "myNum증가" 버튼을 눌러도, 클릭할 때마다 콘솔에는 증가한 값이 찍히지만, 그 값이 다음 렌더링까지 이어지지 않는다
    const plusMyNum = () => {
        console.log('일반 변수증가', ++myNum);
    }

    return (<>
        <h2>useRef 사용하기</h2>
        <div>
            <p>State : {stateNum}</p>
            <p>Ref : {refNum.current}</p>
            <button onClick={plusState}>State증가</button>
            <button onClick={plusRef}>Ref증가</button>
            <button onClick={plusMyNum}>myNum증가</button>
        </div>
    </>)
}