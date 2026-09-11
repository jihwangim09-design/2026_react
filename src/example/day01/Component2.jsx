// Component2.jsx 만들고 78~79 코드 따라서 작성
// App -> Component2
// 1. // 일반 함수 형식으로 작성한 컴포넌트
function FrontComp( props ) { 
    return (<>
        <li>프론트엔트</li>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>jQuery</li>
            </ul>
    </>)
}
// 2. // 화살표 함수 형식으로 작성한 컴포넌트
const BackComp = ( props ) => {  // const 변수명 = (매개변수) => { }
    // props) => { return (...) } 이 통째로가 함수 하나의 값 이거를 BackComp라는 상수에 넣음 
    // 이후에 BackComp(...) 쓰면 BackComp에 저장된 함수가 실행됨
    // 이름없는 함수를 만들어서 변수에 붙힌거일뿐 일반 함수 형식이랑 똑같음
    return (<>
        <li>백엔드</li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring Boot</li>
        </ul>
    </>)
}
// 3. 익명 함수 형식으로 작성한 컴포넌트 생성
let FormComp = function ( props ) { // 보통 function FormComp(props){} 이렇게 이름이 바로 붙는데 얘는 안붙었음
    // onMyEvent1={() => { alert(...) }}처럼 버튼 클릭 시 딱 한 번 실행되고 끝날 동작(재사용안함)을 만들 때 익명함수를 씀
    return (<>
        <form>
            <select name="gubun">
                <option value="front">프론트엔트</option>
                <option value="back">백엔드</option>
            </select>
            <input type="text" name ="title" />
            <input type="Submit" value="추가" />
        </form>
    </>)
}
// 4. 3가지의 컴포넌트 합치는 컴포넌트 , 79p와 다르게 App -> Component2
export default function Component2 ( props ) { // 최상위 컴포넌트
    // < /> → JSX 전용 문법, "컴포넌트를 렌더링 하라는 지시" ()를 안씀
    return (<>
    <div>
        <h2>React - Component</h2>
        <ol> 
            <FrontComp></FrontComp>
            <BackComp />
        </ol>
        <FormComp />
    </div>
    </>)
}
