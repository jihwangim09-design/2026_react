import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

export default function Write(props){
    const navigate = useNavigate(); // 화면을 이동하기 위한 훅
    // html -> <a href=""> , React -> <Link to="">
    // js -> location.href="" , React -> navigate("")
    // html/js 코드는 한번깜빡거림(새로고침이 들어감)
    // *html/js 코드는 깜빡거림*
    // * 등록함수 
    const 등록함수 = async (event) =>{
        event.preventDefault();
        console.log( event.target )// 등록함수를 등록한 마크업
        // 이벤트 발생시킨 form 마크업내 name 속성으로 입력값 반환
        const obj = {
            name : event.target.writer.value ,
            subject : event.target.title.value ,
            content : event.target.contents.value
        }
        // axios            obj = 입력받은값   await는 함수 앞에 async(비동기)안쓰면 에러남 
        const response = await axios.post("http://localhost:8080/api" , obj );
        const data = response.data;
        if( data == true ){ navigate("/list")} // 반환값이 true이면 페이지 전환

    } 



    return(<>
    <div>
        <Link to="/list">목록</Link>
        <form onSubmit={ (event) => {등록함수(event);} }>
            작성자 : <input name="writer"/> <br/>
            제목 : <input name="title"/> <br/>
            내용 : <textarea name="contents" row="3"/> <br/>
            <input type="submit" value="작성"/>
        </form>
    </div>
    
    </>)
}