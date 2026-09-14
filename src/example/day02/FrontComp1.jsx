    export default function FrontComp1(props){
        return (<>
        <li><a href="/" onClick={(event) =>{ {/* (event) 매개변수 , => 이게 함수라는 표시 { } 실행될 내용 */}
        event.preventDefault(); {/* /로 페이지 이동을 막음 그래서 클릭해도 페이지가 이동하거나 새로고침되지 않음 */}
        props.onSetMode('front');
        }}>프론트엔드</a></li> {/* <a href="/">프론트엔드</a>는 클릭하면 자동으로 / 주소로 페이지 이동(새로고침)을 시도*/}
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>jQuery</li>
        </ul>
        </>)
    }