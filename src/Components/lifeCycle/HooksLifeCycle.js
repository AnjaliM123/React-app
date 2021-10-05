import React, { Fragment, useEffect, useState } from "react";


function HooksLifeCycle() {
    const [count,setCount]=useState(0);

    useEffect(()=> {
        console.log("use effect after first render");
    }, [])

    useEffect(()=> {
                console.log("use effect when ever props or state is changed");
    }, [count])

    useEffect(()=> {
        return ()=> {
            console.log("use effect when ever component being unmounted from dom");
        }
    }, [])

    const onClickButton=()=> {
        setCount(count+1)
    }

    return (
       
        <>
        {console.log("in return statement")};
        <p>count {count}</p>
        <button type="button" onClick={onClickButton}>click</button>
        </>
    )
}
export default HooksLifeCycle