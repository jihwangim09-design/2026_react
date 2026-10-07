import { Client } from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react"
// ***** 웹소켓/STOMP 설치 ***** 1. 설치 : npm i @stomp/stompjs 

export default function ChatRoom(props){
    // 1. useState이란? 상태(값) 저장하는 *변경시 해당 컴포넌트/함수 재실행/재호출* 훅/라이브러리
    // const [ 변수명 , set변수명 ] = useState( 초기값 );
    const [ message , setMessage ] = useState(''); // 입력받은 메시지
    const [ messages , setMessages ] = useState([]); // 메시지들 , 서버로부터 받은 메시지들

    // * useRef 이란? 상태(값)을 저장하고 *다른 상태와 상관없이 새로고침/초기화 방지 => 상태유지 *
    // const 변수명 = useRef( 초기값 ); , useRef 변수는 .current 속성에 값 보관
    const clientRef = useRef( null ); // 지역변수vs상태(state)변수vs참조(useRef)변수 중요1
    // 2. 전송시 백엔드에게 메시지 보내기
    // 컴포넌트 최초 실행시 한번만 실행
    useEffect( () => { // useEffect 중요3
        // 2. const client = new Client( {brokerURL : "접속할백엔드브로커주소" , onConnect : 접속성공이벤트 } )
        const client = new Client( {
                brokerURL : "ws://localhost:8080/ws-chat" , //스프링의 'registerStompEndpoints' 정의 주소와 일치 )
                // 3. 만약에 stomp 접속 성공시 특정 경로 구독!
                onConnect : () => { // 접속 성공하면 실행되는 이벤트/함수 
                // 특정 경로 구독 신청
                // client.subscribe("/구독경로" , (message)=>{ 메시지를 받았을 떄 } ) // 스프링의 'configureMessageBroker' 정의 주소와 일치
                client.subscribe("/sub/chat/room/general" , (message)=>{} ) 
                // 4. 만약에 특정 경로의 구독에서 메시지를 받았을 떄
                // * JSON.parse(문자열 -> JS객체 변환) vs JSON.stringify( JS객체->문자열 변환)
                // * AXIOS 통신은 JSON 기본값으로 자동변환 지원!!
                messages.push( JSON.parse( message.body) ); // message.body 메시지 본문
                setMessage( message ); // 렌더링
            
            }
        }) // client end
        // 5. stomp 실행 , client.activate()
        client.activate()
        // 6. client 객체 다른 함수(전송함수) 사용하기 위해 
        clientRef.current = client;
        // 7. 만약에 컴포넌트 사라지면(생명주기 중요2) , stomp 종료 , client.deactivate()
        return () => { client.deactivate();}



    } , [ ])

    // *전송시 백엔드에게 메시지 보내기 이게 2번
    const sendMessage = ( e ) => {
        console.log("메시지 보내기");
        // 8. 만약에 소켓객체가 없으면 실패
        if( clientRef.current == null) return;
        // 9. 메시지 전송 , client.publish( )
        // clientRef.current.publish({ destination : "/발행주소" , body : 내용물 } )
        // 발행주소 : 스프링의 configureMessageBroker 정의된 발행주소 + @MessageMapping 정의된 주소
        const info = { // 스프링 MessageDto 참조하여 구성
            tyep : "TALK" , rooId : "general" , sender : "user" , 
            content : message , date : new Date().toISOString()
        }
        clientRef.current.publish({ 
            destination : "/pub/chat/message" , 
            body : JSON.stringify(info) , // JSON.stringify() , JS객체->문자열 변환 함수

        })
    }

    return (<>


        <h3>채팅방</h3>
        { messages.map( (msg) =>  {
                <div> {msg.sender} : { msg.content } </div>
            })

        }

        <input value={ message } onChange={ (e) => setMessage( e.target.value ) } />
        <button type="button" onClick={ sendMessage }> 전송 </button>
    </>)
}