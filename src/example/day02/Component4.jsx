import { useState } from 'react';
import FrontComp1 from './FrontComp1';
import BackComp1 from './BackComp1';
function Component4() {
    const [mode , setMode] = useState('both');
    const handleSetMode = (mode) => {
        setMode(mode);
    };
    let contents = '';
    if(mode==='front'){
        contents = <>
        <FrontComp onSetMode={(mode) => {
            setMode(mode);
        }}></FrontComp>
        </>
    }
    else if(mode==='back'){
        contents = <>
        <BackComp1 setMode={setMode} />
        </>
    }
    else{
        contents = <>
        <FrontComp onSetMode={(mode)=> {
            handleSetMode(mode);
        }}></FrontComp>
        <BackComp1 setmode={handleSetMode} />
        </>
    }
    return (<>
    <h2><a href="/" onClick={(event) => {
        event.preventDefault();
        setMode('both'); 
    }}>React-State</a></h2>
    <ol>
        {contents}
    </ol>
    </>)
}
export default Component4;