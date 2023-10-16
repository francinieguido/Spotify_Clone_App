"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import Button from "./Button";


interface HeaderProps {
    children: React.ReactNode;
    className?: string;
};

const Header : React.FC<HeaderProps> = ({
    children,
    className
}) => {

    {/*Open login modal*/}
    const authModal = useAuthModal();

    const router = useRouter();

    const supabaseClient = useSupabaseClient();

    {/*Extracting user from useUser hook*/}
    const {user, subscription} = useUser();

    const handleLogout = async () =>{
        //Logout handler
        const {error} = await supabaseClient.auth.signOut(); 
        // TODO: Future reset-any-songs-playing functionality
        router.refresh();

        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Logged out.')
        }
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
                    {/*Hiding login signup button when user's logged in*/}
                    {user ? (
                        <div className="
                        flex
                        justify-between
                        items-center
                        pag-x-4
                        ">
                            <Button onClick={handleLogout} className="
                            bg-white
                            px-6
                            py-2
                            ">
                                Logout
                            </Button> 
                            <Button
                            onClick={() => router.push('/account')}
                            className="bg-white mx-3">
                                <FaUserAlt/>
                            </Button>  
                        </div>
                    ) : (
                    <>
                        <div>
                            <Button onClick={authModal.onOpen} className="bg-transparent text-neutral-300 font-medium ">
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Button onClick={authModal.onOpen} className="bg-white px-6 py-2">
                                Login
                            </Button>
                        </div>
                    </>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
};

export default Header;
