"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
};

const Header : React.FC<HeaderProps> = ({
    children,
    className
}) => {

    const router = useRouter();

    const handleLogout = () =>{
        //Logout handler
    };

    return (
        <div className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-slate-800
        p-6
        `, className)}>
            <div className="w-full flex mb-4 items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button onClick={() => router.back()} className="rounded-full bg-slate-900 flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretLeft size={35} className="text-white"/>
                    </button>
                    <button onClick={() => router.forward()} className="rounded-full bg-slate-900 flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretRight size={35} className="text-white"/>
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="flex justify-center rounded-full p-2 bg-white hover:opacity-75 transition">
                        <HiHome size={20} className="text-slate-900"/>
                    </button>
                    <button className="flex justify-center rounded-full p-2 bg-white hover:opacity-75 transition">
                        <BiSearch size={20} className="text-slate-900"/>
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                        <div>
                            <Button>
                                Sign Up
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            
        </div>
    );
};

export default Header;
