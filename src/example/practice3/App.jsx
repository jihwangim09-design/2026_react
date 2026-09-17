import { Route ,Routes } from "react-router-dom";
import Home from "./Home";
import Kim from "./Kim";
export default function App2(props){
    return (<>
    <Routes>
        <Route path="/" element={<Home/>}>
            <Route path="/kim" element={<Kim/>} />
        </Route>
    </Routes>
    
    
    </>)

}