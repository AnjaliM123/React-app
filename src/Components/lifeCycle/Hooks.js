import ClassComponent from "./index"
import React, { Fragment, useEffect, useState } from "react";
function Hooks() {
    const [show, setShow]=useState(false);

    const onClickShow=()=> {
        setShow(!show)
    }

    return (
        <div>
            <button type="button" onClick={onClickShow}>show</button>
            {show && <ClassComponent/>}
        </div>
    )
}
export default Hooks