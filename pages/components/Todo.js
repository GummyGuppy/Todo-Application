import React from 'react'
import { useState, useEffect } from 'react'


export default function Todo() {

    const [todo, setTodo] =  useState()

    useEffect(() => {
        console.log(todo)
    }, [todo])

    return (
        <>

    <input onChange={(e) => setTodo(e.target.value)}/>
        </>
    )
}
