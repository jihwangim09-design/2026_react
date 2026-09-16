import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import "./index.css"

export default function Home(props){
    return (<>
    <div className="Wrap">
        <SideNav />
        {/* 홈 영역 */}
        <Outlet /></div>
    </>)
}