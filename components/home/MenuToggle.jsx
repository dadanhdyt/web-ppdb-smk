"use client"
import { Sling as Hamburger } from 'hamburger-react'
export default function MenuToggle({menuOpenHandler}){
    return <>
       <div className="sm:hidden">
        <Hamburger color='white' onToggle={menuOpenHandler}/>
       </div>
    </>
}