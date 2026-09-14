import FrontComp from "./FrontComp.jsx";
import BackComp from "./BackComp.jsx";
function Component1(){
    return (<>
    <h2>리액트 모듈</h2>
    <ol>
        <FrontComp onMyevnet1={() => {
            alert('프론트엔드 클릭됨(부모전달)');
        }}></FrontComp>
        <BackComp onMyEvent2={(msg)=>{
            alert(msg); {/* 함수정의임 실행이 아님*/}
        }}/>
    </ol>
    </>)
}
export default Component1;