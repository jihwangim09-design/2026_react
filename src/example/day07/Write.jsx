import { Link, useNavigate } from "react-router-dom"

export default function Write(props){
    const navigate = useNavigate(); // 화면을 이동하기 위한 훅
    // html -> <a href=""> , React -> <Link to="">
    // js -> location.href="" , React -> navigate("")
    // html/js 코드는 한번깜빡거림(새로고침이 들어감)
    // *html/js 코드는 깜빡거림*
    return(<>
    <div>
        <Link to="/list">목록</Link>
        <form>
            작성자 : <input name="writer"/> <br/>
            제목 : <input name="title"/> <br/>
            내용 : <input name="contents" row="3"/> <br/>
            <input type="submit" value="작성"/>
        </form>
    </div>
    
    </>)
}