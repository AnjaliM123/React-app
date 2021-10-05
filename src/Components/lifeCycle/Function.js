import HooksLifeCycle from "./HooksLifeCycle"
import React, { Fragment, useEffect, useState } from "react";

function Hooks() {
    const[show, setShow]=useState(false);

    const onClickShow=()=> {
        setShow(!show);
    }

    return (
        <>
        <h1>functional component</h1>
        <button type="button" onClick={onClickShow}>show</button>
                {show&& <HooksLifeCycle/>}
        </>
    )
}
export default Hooks