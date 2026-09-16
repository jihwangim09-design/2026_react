import { NavLink } from "react-router-dom";


export default function SideNav(props){
    return (<>
        <div className="NavBox">
            <h2>ooo 팀 프로젝트</h2>
            <NavLink  className="top" to="/"> home </NavLink>
            <div>팀원 소개</div>
            <NavLink  className="bottom" to="/kim"> kim </NavLink>
        </div>
    
    </>)
}