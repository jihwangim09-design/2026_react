
import './index.css'
import logo from '../../assets/logo.png'
// 전통방식의 CSS 파일 import 'css파일경로' 또는 index.html 포함
// [3] CSS 객체 방식의 CSS 적용 : -하이픈 대신에 카멜표기법사용
const myStyle = {
    color : 'white', backgroundColor:"DodgerBlue",
    padding: "10px",fontFamily: "Verdana"
}
const iWidth ={maxWidth: '300px'};

export default function Component1( props ){
    return(<>
        <h2> 리액트 스타일</h2>
        <ol>
            {/* 인라인 방식의 CSS 적용 { key:value} */}
            <li style={{color:"red"}}>프론트엔드</li>
            <ul> 
                <li> <img src="/img/logo.png" style={ iWidth } /> </li>
                <li> <img src={ logo } style={iWidth} /> </li>
                <li> <img src="http://nakja.co.kr/images/reactjs.png" style={iWidth}/> </li>
                
            </ul>
            <li>백엔드</li>
            <ul> 
                {/* 전통방식의 CSS 적용*/}
                <li id="backEndSub">java</li>
                <li class="warnings"> oracle </li>
                <li> jsp </li>
                
            </ul>


        </ol>
    </>)
}   