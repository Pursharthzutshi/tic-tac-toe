import React from "react";
import { useAppDispatch } from "../hooks";
import { handleOnClick } from "./slicers/BoardSlicer";

type rowColProps = {
    row:number[]
    rowIndex:number
}

export const BoardRow = ({row,rowIndex}:rowColProps) => {


    // dispatch
    const dispatch = useAppDispatch();


    const sendDisptachValues = (indexArgs: any) => {
        dispatch(handleOnClick(indexArgs))
    }

    return (

        <div key={rowIndex} className="board-row">

            {
                row.map((cell: number, cellIndex: number) => {
                    const indexArgs = { cellIndex, rowIndex }
                    return <button key={cellIndex} onClick={() => sendDisptachValues(indexArgs)} className="cell">{cell}</button>
                })
            }

        </div>
    );
};