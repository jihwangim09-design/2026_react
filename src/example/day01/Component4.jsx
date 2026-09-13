// Component4.jsx 만들고 87~88 코드 따라서 작성
function FrontComp(props) {
    // props = frontData = ['HTML5' , 'CSS3' , 'Javascript' , 'jQuery' ] , frTitle="프론트엔트" 객체 하나에 각각의 변수값을 담아서 가져옴
    const liRows = []; // 4 <li> 태그들을 담을 빈 배열
    for( let i = 0; i<props.propData1.length ; i++ ) { // 5 i=0: liRows.push(<li key={0}>HTML5</li>) .. i=4가되면 종료
        // 부모로 부터 전달받은 props내 propData1 반복
        liRows.push(<li key={i}>{props.propData1[i]}</li> );
        // 배열명.push( 값 ); // 배열내 값 추가
    }   
    return (<> {/* 6    return은  두 개의 태그를 묶은 한 덩어리를 반환
    <li>프론트엔트</li> + <ul>로 감싸진 4개의 <li>들을 Component4에게 반환
    */}
        <li>{props.frTitle}</li> {/* <li> — List Item (목록 항목) <ul> 또는 <ol> 안에서만 쓰는, "목록의 항목 하나하나"를 나타냄 반드시 <ul>이나 <ol>로 감싸진 상태 */}
        <ul> {/*<ul> = Unordered List (순서 없는 목록) 순서가 중요하지 않은 목록*/}
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
    <li>{baTitle}</li> {/* liRows 안에 <li>가 4개 들어있음 */}
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
        <ol> {/*<ol> — Ordered List (순서 있는 목록) 1, 2, 3 같은 번호가 자동으로 매겨지는, 순서가 중요한 목록 몇 번째냐"가 중요한 것*/}
            <FrontComp propData1={frontData} frTitle="프론트엔트"></FrontComp> {/* 3
            <li>프론트엔트</li>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>jQuery</li>
            </ul>  이렇게 들어옴           */}
            <BackComp propData2={backData} baTitle="백엔드"/> {/* 7     /> 자체 닫힘 태그를 넣음
            <li>백엔드</li>
            <ul>
                <li>Java</li>
                <li>Oracle</li>
                <li>JSP</li>
                <li>Spring Boot</li>
            </ul>  백엔드도 마찬가지 */}

        </ol>

        </div>
    
    </>)
}
export default Component4