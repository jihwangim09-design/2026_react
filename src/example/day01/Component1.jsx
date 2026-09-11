/*
    1. 컴포넌트명.jsx 파일 생성한다.
    2. export default function 컴포넌트명( props ){ }
       - export defult : 내보내기 , 다른 파일에서 import 할 수 있도록(가져다 쓸 수 있도록)
            - 만약에 내부에서 사용하는 컴포넌트는 생략
            - 파일당 export default는 딱 하나만 가능
    ex) import Header from './Header';   // Header.jsx에서 내보낸 걸 가져옴

       컴포넌트명 : 첫글자 무조건 대문자로 시작
    3. { } 안에 return 에서는 JSX문법가능 , 그외 JS 문법 return 뒤에는 최상위 태그가 반드시 딱 1개여야 함
       return 에서는 2줄이상 입력시 ( < > < > ) 묶는다.
       <> </> : Fragment (프래그먼트)
       <> </>는 "여러 개를 묶어주는 역할만 하고, 실제 HTML에는 흔적을 남기지 않는 역할 최상위 태그 1개 만족

 
*/

function Footer( props ){       // 푸터
    return <div> 푸터구역 </div>
}


function Header( props ){        // 헤더
    return <div> 헤더구역 </div>

}
export default function Component1( props ){    // 본문
    // Component1은 이 페이지는 헤더 + 본문내용 + 푸터로 구성된다"라고 조립 설계도를 그린 것
    // <Header> </Header>는 HTML 태그처럼 생겼지만 사실은 함수 호출
    // < /> → JSX 전용 문법, "컴포넌트를 렌더링 하라는 지시" ()를 안씀
    return (<>

    <Header> </Header> 

    <div> 메인페이지 </div>

    <Footer> </Footer>


    </>)
}

// Header, Footer는 "레고 블록"이고, Component1은 그 블록들을 조립해서 만든 완성품
// 사용이유 : 공통되는 UI를 한 곳에서만 관리해서 재사용성과 유지보수성을 높이기 위해서