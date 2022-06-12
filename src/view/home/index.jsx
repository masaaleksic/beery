import React, { useState, useRef, useEffect } from "react";

export default function Home(){
    const [broj1, setBroj1] = useState(0);  
    const [broj2, setBroj2] = useState(0);
    const broj1Ref = useRef();
    const broj2Ref = useRef();

    useEffect(() => {
        console.log("DID MOUNT");
    },[]);

    useEffect(() => {
        broj1 > 2 && (document.getElementById('555').style.color = 'red');
        broj1 > 5 && (broj1Ref.current.style.color = 'red')
    },[broj1]);

    return(
        <>
            <input type="button" value="POVECAJ 1" onClick={()=>setBroj1(broj1 + 1)}/>
            <input type="button" value="POVECAJ 2" onClick={()=>setBroj2(broj2 + 1)}/>
            <p id='555' ref={broj1Ref}>BROJ 1: {broj1}</p>
            <p ref={broj2Ref}>BROJ 2: {broj2}</p>
        </>
    );
}