import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import List from "./List";

export default function App(props){
    // Route path='*' = 와일드카드 (모든주소) 
    return(<>
    <Routes>
        <Route path='*' element={<NotFound/>} />
        <Route path="/list" element={<List/>} />
    </Routes>
    </>)
}