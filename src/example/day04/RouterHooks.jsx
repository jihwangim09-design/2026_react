import { useLocation, useSearchParams } from "react-router-dom";

export default function RouterHooks(props){

        const location = useLocation();
        const [searchParms , setSearchParams ] = useSearchParams();
        // searchParms.get('변수명');
        const mode = searchParms.get('mode'); // 중요 
        const pageNum = searchParms.get('pageNum'); // 중요
        
        const changeMode = () =>{
            const nextMode = (mode==='list') ? 'view' : 'list'; // mode 값이 list이면 view 아니면 list
            setSearchParams( { mode : nextMode , pageNum });
        }
        const nextPage = () => { // 페이지번호가 null 이면 1 아니면 +1 , pa
            let pageTemp = (pageNum === null || inNaN(pageNum)) ? 1 : parseInt(pageNum)+1;
            setSearchParams( { mode , pageNum : pageTemp });
        }
        const prevPage = () => { 
            let pageTemp = (pageNum === null || inNaN(pageNum)) ? 1 : parseInt(pageNum)-1;
            setSearchParams( { mode , pageNum : pageTemp });
        }
        return(<>
        <h2> 라우터 관련 Hook</h2>
            <div>
                <ul>
                    <li>URL : {location.pathname}</li>
                    <li>쿼리스트링 : {location.search} </li>
                    <li>mode : {mode} </li>
                    <li>pageNum : {pageNum} </li>
                </ul>
                <button onClick={changeMode}>mode변경</button>
                <button onClick={prevPage}>이전Page</button>
                <button onClick={nextPage}>다음Page</button>
            </div>
        </>);
    }