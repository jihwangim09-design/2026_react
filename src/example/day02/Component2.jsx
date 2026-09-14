// 구조분해 : 객체/배열 내 요소들을 각각 변수로 분해
// const { name , age } = { name: '유재석 , age : 40 }
// console.log( name , age );

// const [ name , setName ] = [ '유재석' , function setter(){} ] useState가 상태변수랑 초기값을 반환?
// console.log( name ); setter( );


let 전역변수 = 0; // 함수 밖에 변수

export default function Component2( props ){
    let 지역변수 = 0 ; // 함수 안에 변수
    // 1. 전역변수,지역변수,증가함수 : 내부적으로는 증가O, 화면으로는 증가X 왜그러냐면? 렌더링을 안해서
    const 증가함수1 = ( ) => {
        전역변수++; 지역변수++; console.log( 전역변수 , 지역변수 ); }
    

    return (<> 
    
        <h3> 상태관리 </h3>
        <h4> 전역변수: { 전역변수 } , 지역변수: { 지역변수 } </h4> {/* 둘다 0이 나옴 */}

        <button onClick={ 증가함수1 }> 버튼1</button>
    </>)
}