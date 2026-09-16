import { Route ,Routes } from "react-router-dom";
import Home from "./Home";
import 김지환 from "./Kim";
export default function App2(props){
    return (<>
    <Routes>
        <Route path="/" element={<Home/>}>
            <Route path="/kim" element={<김지환/>} />
        </Route>
        




    </Routes>
    
    
    </>)

}