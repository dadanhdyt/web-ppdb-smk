"use client"

import { useEffect, useState } from "react"
import NavLink from "./NavLink"
import Image from "next/image"

export default function MenuNavbar({ isMenuOpen }) {

    return <>
        <div className={`fixed left-0 sm:-translate-y-0 sm:top-0 sm:bg-transparent sm:p-0 sm:border-none sm:w-auto sm:relative transition-all sm:opacity-100  ${isMenuOpen ? 'opacity-100 -translate-y-0 ' : 'opacity-0 -translate-y-[100%]'} w-full h-auto  px-2 py-0 sm:py-0 pb-4 bg-blue-600 border-t-2 border-t-blue-500 top-0`}>
            <Image width={70} height={70} src={'/static/logo.png'} className="mb-3 sm:hidden" alt="logo ifsu" />
            <ul className="flex flex-col gap-2 border-t sm:border-t-0 sm:pt-0 sm:flex-row">
                <NavLink>Home</NavLink>
                <NavLink>Pendaftaran</NavLink>
                <NavLink>Jalur Pendaftaran</NavLink>
                <div className="flex">
                    <NavLink className={'bg-orange-500 text-center rounded-none'}>Masuk</NavLink>
                    <NavLink className={'bg-green-500 text-center rounded-none'}>Daftar Akun</NavLink>
                </div>
            </ul>
        </div>
    </>
}