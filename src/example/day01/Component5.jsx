export default function Component5( props ){
    //
    function event1(){ alert('이벤트발생');} 
    const event2 = function(){alert('이벤트발생2');}
    const event3 = () =>{ alert('이벤트발생3');}
    // onclick = "함수명()"         --리액트방법 --> onClick = 함수명
    // 괄호로 전달하면 바로 실행해버림 근데 함수이름만 전달하면 예약느낌으로 전달만해놓고 실제로 클릭을해야 실행함
    // 1.  c -> C 2. 함수 실행 x
    return(<>
        {/* event1, event2, event3  ← 세 가지 방식으로 미리 만들어둔 함수 (이름 있음) event4는 없음 버튼 안에서 바로 즉석으로 만드는 함수 (이름 없음, 익명) */}
        <button onClick={ event1 }> 이벤트1 </button> {/* event1 함수예약 */}
        <button onClick={ event2 }> 이벤트2 </button> {/* event2 함수예약 */}
        <button onClick={ event3 }> 이벤트3 </button> {/* event3 함수예약 */}
        <button onClick={ ( )  => { alert('이벤트발생'); } }  > 이벤트4 </button> {/* function 대신 () => 로 씀*/}
    </>)
}