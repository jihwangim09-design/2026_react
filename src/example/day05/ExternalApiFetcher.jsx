import axios from "axios";
import { useState , useEffect } from "react"
import { resume } from "react-dom/server"
import { data } from "react-router-dom";

function RandomUser(props){
    const [myJSON , setMyJSON] = useState({results:[]}); 
    // 객체 안에 빈배열 속성으로 초기화
    // API 응답 결과를 저장하는 상태/변수

    // useEffect( () => { 하고싶은코드 } , [  ] ) // 최초 1번만 실행
    // AXIOS 이용하여 API 통신 하고 응답 결과 상태변수에 저장
    useEffect(async function(){
        // await axios.HTTP메스도명( "통신할주소" , body값 );
        const response = await axios.get("https://api.randomuser.me?results=10");	
        const data = response.data;
        setMyJSON( data ); // 통신 응답결과 상태변수에 대입 --> 렌더링
    } , []);


    // 현재 상태변수에 졵하는 리스트들을 tr로 구성하여 하나씩 html을 만들기
    // <table>: 표 전체
    // <thead>: 표의 머리말 부분(제목 줄)
    // <th>: 머리말 한 칸(제목)
    // tbody>: 표의 실제 데이터가 들어가는 몸통 부분
    // <tr>: 표의 한 줄(행)
    // <td>: 한 칸(셀)

    let trTag = myJSON.results.map((data) => {
        // 간단한 표 이용하여 위에서 정의한 
        return (
            <tr key={data.login.md5}>
                <td><img src={data.picture.thumbnail} /></td>
                <td><a href="/" onClick={ (e) => {
                    e.preventDefault();
                    props.onProfile(data);
                }}>{data.login.username}</a></td>
                <td>{data.name.title} {data.name.first} {data.name.last} </td>
                <td>{data.nat}</td>
                <td>{data.email}</td>
            </tr>
        );
    });

    return( 
        <div>
            <table border='1'> 
                <thead>
                    <tr>
                        <th>사진</th><th>로그인</th><th>이름</th>
                        <th>국가</th><th>Email</th>
                    </tr>
                </thead>
                <tbody>{trTag}</tbody>
            </table>
        </div>
    );
}


export default function Apiaxios(props){
    return( <>
        <h2> 외부 서버 통신 </h2>
        <RandomUser onProfile={(sData)=>{
            console.log(sData);
            let info = `전화번호:${sData.cell}
                        성별:${sData.gender}
                        username:${sData.login.username}
                        password:${sData.login.password}`;
            alert(info);
        }}></RandomUser>
    </>);
}

/*
    fetch대신 사용
    axios란? 주로 API 비동기통신
    - 주로 외부API와 백엔드API(controller) 통신 도구
    - content-type 기본값이 application/json
    1. 사용법 
    const 함수명 = async( ) => {
        const response = await axios.HTTP메소드명( "통신할주소?쿼리스트링" , {body} );
        const data = response.data
    }
*/