import { Route, Routes } from "react-router-dom";
import TopNavi from "./TopNavi";
import UseRef1 from "./UseRef1";

export default function App(props){
    return (<>
        <TopNavi></TopNavi>
        <Routes>
            <Route path="/" element={ <UseRefExam1/>} />
            <Route path="/use-ref1" element={ <UseRefExam1/>} />
            {/* <Route path="/use-ref2" element={ <UseRefExam2/>} />*/}
        </Routes>
    
    </>)
}