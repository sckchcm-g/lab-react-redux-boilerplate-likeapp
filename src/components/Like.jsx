import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { listAction, listSelector } from "../redux/reducer";


const LikeContainer = () => {
    const [counts, setCount] = useState(0)

    const count = useSelector(listSelector);
    const dispatch = useDispatch();

    function addLike() {
        dispatch(listAction.like());
    }

    function unLike() {
        dispatch(listAction.unlike());
    }

    return (
        <div className="body">
        <div className="box">
            <h1>{count}</h1>
            <div className="btngp">
            <button className="btn b1" onClick={addLike}>Like</button>
            <button className="btn b2" onClick={unLike}>Unlike</button>
            </div>
        </div>
        </div>
    )

}

export default LikeContainer