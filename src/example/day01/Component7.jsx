function FrontComp(props) { /* ...생략... 위와 동일 */ }

const BackComp = ({ onMyEvent2 }) => {
    // 화살표 함수 + 구조 분해 할당으로 props 받기
    return (<>
        <li><a href="/" onClick={(event) => {
            // event 객체를 매개변수로 받아서 기본 동작(페이지 이동) 방지
            event.preventDefault();
            onMyEvent2('백엔드 클릭됨(자식전달)');
        }}>백엔드</a></li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>)
}

function App() {
    return (<>
        <h2>React - Event</h2>
        <ol>
            <FrontComp onMyEvent1={() => { /* ...생략... */ }} />
            <BackComp onMyEvent2={(msg) => {
                // ③ 자식 컴포넌트에서 호출될 이벤트 핸들러 (매개변수 있음)
                alert(msg);
            }} />
        </ol>
    </>)
}
export default App;