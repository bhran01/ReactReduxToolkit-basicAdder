import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { selectCount ,addbyone,subbyone,reset } from './AddSubSlice'

export default function AddSub() {
    let state=useSelector(selectCount)
    let dispatch=useDispatch()
    return (
        <>
            <h1>{state}</h1>
            <button onClick={()=>{ dispatch(addbyone()) }}> + </button>
            <button onClick={()=>{ dispatch(reset()) }}> RESET </button>
            <button onClick={()=>{ dispatch(subbyone()) }}> - </button>
        </>
    )
}
