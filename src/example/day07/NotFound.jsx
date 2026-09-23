import { Link } from "react-router-dom";

export default function NotFound(props){
    // html에서는 <br> 이렇게 해도 되는데 react에서는 <br/> 닫아야 작동
    // 라우터 : 특정 url 경로의 컴포넌트를 불러오려고
    return(<>
    <h2>Not Found</h2>
    <p>
        페이지를 찾을 수 없습니다. ㅜㅜ <br/>
        <Link to="/list">목록으로 바로가기</Link>
    </p>
    </>)
}