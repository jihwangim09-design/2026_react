const BackComp1 = ({setMode}) => {
    return (<>
    <li><a href="/" onClick={(event) => {
    event.preventDefault();
    setMode('back');
    }}>백엔드</a></li>
    <ul>
        <li>Java</li>
        <li>Oravle</li>
        <li>JSP</li>
        <li>Spring Boot</li>
    </ul>
    </>)
}
export default BackComp1;