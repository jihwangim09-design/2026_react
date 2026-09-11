// Component4.jsx 만들고 87~88 코드 따라서 작성
function FrontComp(props) {
    const liRows = []; // 4 <li> 태그들을 담을 빈 배열
    for( let i = 0; i<props.propData1.length ; i++ ) { // 5 i=0: liRows.push(<li key={0}>HTML5</li>) .. i=4가되면 종료
        // 부모로 부터 전달받은 props내 propData1 반복
        liRows.push(<li key={i}>{props.propData1[i]}</li> );
        // 배열명.push( 값 ); // 배열내 값 추가
    }   
    return (<> {/* 6 
    <li>프론트엔트</li> + <ul>로 감싸진 4개의 <li>들을 Component4에게 반환
    */}
        <li>{props.frTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}

// 원래 props 객체인데 구조분해 하여 propData2 변수와 baTitle 변수로 각각 저장
const BackComp = ( {propData2, baTitle} ) => { 
    const liRows = []; // 배열
    let keyCnt = 0;
    for( let row of propData2){
        liRows.push(
            <li key={keyCnt++}>{row}</li>
        );
    }
    return (<>
    <li>{baTitle}</li>
    <ul>
        {liRows}
    </ul>
</>)
}

function Component4() {
    // 추후에 연동할 백엔드와 통신 AXIOS
    const frontData = ['HTML5' , 'CSS3' , 'Javascript' , 'jQuery' ]; // 1 frontData 배열이 만들어짐
    const backData = ['Java' , 'Oracle' , 'JSP' , 'Spring Boot' ]; // 2 backData 배열이 만들어짐 그다음 return (...) 안으로 이동해서 컴포넌트를 만나면 실행
    return (<>
        <div>
        <h2>React-Props</h2>
        <ol>
            <FrontComp propData1={frontData} frTitle="프론트엔트"></FrontComp> {/* 3 */}
            <BackComp propData2={backData} baTitle="백엔드"/> {/* 7 */}

        </ol>

        </div>
    
    </>)
}
export default Component4