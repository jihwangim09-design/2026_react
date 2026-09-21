import { useEffect , useRef } from "react";

export default function UseRef2(props){
    const passRef1 = useRef();
    const passRef2 = useRef();
    // 비밀번호 입력창 2개를 만들어서, 두 값이 똑같은지 확인하는 폼
    // useRef() = 저장할 값이 아니라, 나중에 HTML 태그 자체를 여기 연결해서 담아둘 것

    // useEffect( () => {} , [] )               // 컴포넌트 생성시 최초 1번 실행
    // useEffect( () => {} )                    // 컴포넌트 생성시 최초 1번 실행 + 재렌더링마다 실행
    // useEffect( () => {} , [stat변수명] )      // 컴포넌트 생성시 최초 1번 실행 + 특정한 state 변경시 재렌더링 실행
    useEffect(() => {
        console.log('passRef' , passRef1 , passRef2);
        passRef1.current.focus(); // passRef1.current는 첫 번째 입력창(진짜 <input> 태그) 자체를 가리킵
        // .focus : 해당 dom에 마우스 (깜빡)커서 두기  
        // 첫 번째 비밀번호 입력창에 자동으로 커서가 깜빡이게 만드는 것
    }, []);

    const checkPassword = () => { // 버튼 눌렀을 때 실행
        // passRef1.current는 첫 번째 <input> 태그 자체
        // .value는 HTML 표준 기능으로, "그 입력창에 지금 사용자가 써놓은 글자"를 가져옴
        if(!passRef1.current.value || passRef2.current.value==''){ // 비밀번호 또는 비밀번호확인 하나라도 없으면
            alert('비밀번호를 입력해주세요');
            passRef1.current.focus();
            return;
        }
        if(passRef1.current.value===passRef2.current.value){
            alert('비밀번호 확인이 완료되었습니다');
        }
        else{
            alert('비밀번호가 일치하지 않습니다.');
            passRef1.current.value = '';
            passRef2.current.value = '';
            passRef1.current.focus();
        }
    }

    return (<>
        <h2>useRef 사용하기2</h2>
        <form>
        패스워드1 : <input type="text" ref={passRef1} name="pass1" /> <tr />
        {/* ref 속성을 태그에 달면, "이 <input> 태그 자체를, passRef1이라는 변수 안에 저장"이라고 React에게 요청*/}
        패스워드2 : <input type="text" ref={passRef2} name="pass2" /> <tr />
        <button type="button" onClick={checkPassword}>패스워드확인</button>
        </form>
    </>)
}

/*
    입력상자내 입력받은 값 제어
    1.useState
        const [ Title , setTitle ]  = useState('');
        <input value={title} onChange={ (e) =>{setTitle( e.target.value); }}/>

    2.uesRef
        const titleRef = useRef('')
        const ref={ titleRef }/>

    -----------------------------------------------------------------------------------------------------
    const formRef = useRef();
    * <form fef={ formRef }>
    </form>x`


*/