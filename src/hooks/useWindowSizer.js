import React, {useEffect,useState} from "react";

function useWindowSizer(){
    const [sizes, setSizes] = useState({
    x:window.innerHeight,
    y:window.innerWidth
})

useEffect(()=>{
    window.addEventListener('resize',resizeHandler);
    return ()=> {
    window.removeEventListener('resize',resizeHandler);
    }
},[]);

const resizeHandler = () =>{
    setSizes({
        x:window.innerWidth,
        y:window.innerHeight
})
}
return sizes
}

export default useWindowSizer;