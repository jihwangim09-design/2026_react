// Component2.jsx 만들고 78~79 코드 따라서 작성
// App -> Component2
// 1. // 일반 함수 형식으로 작성한 컴포넌트
function FrontComp( props ) { 
    return (<>
        <li>프론트엔트</li>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascirpt</li>
                <li>jQuery</li>
            </ul>
    </>)
}
// 2. // 화살표 함수 형식으로 작성한 컴포넌트
const BackComp = ( props ) => { 
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
let FormComp = function ( props ) { 
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
