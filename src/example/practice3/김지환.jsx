  import { useState, useEffect } from "react";
  import axios from "axios";

  function ProductList(props) {
    const [myJSON, setMyJSON] = useState([]);
    // myJSON : 지금 저장되어 있는 값을 읽는 용도
    // setMyJSON : 그 값을 새로 바꿔서 저장하는 용도
    // 객체 안에 빈배열 속성으로 초기화
    // API 응답 결과를 저장하는 상태/변수   // 배열로 바로 초기화

    // useEffect( () => { 하고싶은코드 } , [  ] ) // 최초 1번만 실행
    // AXIOS 이용하여 API 통신 하고 응답 결과 상태변수에 저장
    useEffect(async function Data() {
      const response = await axios.get( //  axios.get("주소") = 주소로 데이터를 요청 후 response에 응답전체 저장
        "http://localhost:8080/test4",
      );
      const data = response.data; // 서버가 보낸 내용물만 담긴 곳이 .data , response.data꺼내서 data에 저장
      // 여기까지 data의 상태는   { currentCount: 10, data: [헬스장 정보가 담긴 배열] } currentCount = 몇개의 데이터가 들어가있는지
      setMyJSON(data.data);
      // const [myJSON, setMyJSON] = useState([]);
      // myJSON : 지금 저장되어 있는 값을 읽는 용도
      // setMyJSON : 그 값을 새로 바꿔서 저장하는 용도
      // setMyJSON(data.data) 뜻은 myJSON이라는 상태에, data.data(진짜 헬스장 배열)를 새로 저장해라
      // 왜 (data.data);나면 공공데이터가 응답을  {"currentCount": 10,"data": [ ... ]} 으로 줘서 
      // 만약에 {"currentCount": 10,"헬스장목록": [ ... ]} 이면 (data.헬스장목록);으로 코드를 작성해야함
      // response.data + 공공데이터 API가 원래 {data: [...]} 형태로 응답
    }, []);
    // 현재 상태변수에 졵하는 리스트들을 tr로 구성하여 하나씩 html을 만들기
    // <table>: 표 전체
    // <thead>: 표의 머리말 부분(제목 줄)
    // <th>: 머리말 한 칸(제목)
    // tbody>: 표의 실제 데이터가 들어가는 몸통 부분
    // <tr>: 표의 한 줄(행)
    // <td>: 한 칸(셀)

    let trTag = myJSON.map((data,index) => {
      // data,index = bno 같은 고유 ID가 없어서, key를 채우기 위해 배열 순번(index)을 대신 사용
      // 간단한 표 이용하여 위에서 정의한

      return (
        <tr key={index}>
          <td>{data.도로명주소}</td>
          <td>{data.상호}</td>
          <td>{data.업종}</td>
          <td>{data.지번주소}</td>
        </tr>
      );
    });
    console.log(trTag);
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>도로명주소</th>
              <th>상호</th>
              <th>업종</th>
              <th>지번주소</th>
            </tr>
          </thead>
          <tbody>{trTag}</tbody>
        </table>
      </div>
    );
  }

  export default function Kim(props) {
    return (
      <>
        <h2>김지환 [제품 전체 조회 및 서울특별시 성동구 헬스장정보]</h2>
        <table>
          <tbody>
            <tr>
              <td>제품소개</td>
              <td>
                <ProductList
                ></ProductList>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }