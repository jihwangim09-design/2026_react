import { useEffect, useState } from "react"

function MoveBox( props ){
    const [ position , setPosition ] = useState(props.initPosition); 
    // position: 박스가 화면에서 얼마나 좌우로 밀려있는지 저장하는 값. 
    // 시작값은 부모(Lifecycle)가 넘겨준 props.initPosition(=50).
    const [leftCount , setLeftCount ] = useState( 1 ); // leftCount: 화면에 표시할 숫자. 시작값은 1.
    const boxStyle = {
        backgroundColor : 'red' , position : 'relative' , testAlign : 'center',
        width:'100px' , height:'100px', margin: '10px', lineHeight: '100px',
        left: `${position}px`
    }
    const moveLeft = ( ) => { 
        setPosition( ()=> position-20 ); 
        setLeftCount( () => leftCount +1 );
    }
    const moveRight = () => { setPosition( ()=> position + 20 ) }

    // ************** 생명주기 ************** // 
    useEffect( ()=>{
        console.log( 'useEffect 실행 --> 마운트')
        return ()=>{ 
            console.log( 'useEffect 실행 --> 언마운트')
        }
    // } ); // [1] 의존생 배열 생략 : 최초1번실행 , 업데이트
    // } , [] ); // [2] 의존성 배열 공백 : 최초1번실행
    },[ leftCount ]); // [3] 의존성 배열 특정 변수 : 최초1번실행 , 특정변수업데이트

    console.log( 'return실행 --> 렌더링 ')
    return (<>
        <div style={ boxStyle }>{ leftCount }</div>
        <button onClick={ moveLeft }> 좌측이동 </button>
        <button onClick={ moveRight }> 우측이동 </button>
    </>)
}

export default function Lifecycle( props ){
    return (<>
        <MoveBox initPosition={50} ></MoveBox>
    </>)
}