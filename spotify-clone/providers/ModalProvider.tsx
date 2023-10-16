"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modals";
import AuthModal from "@/components/AuthModal";


const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    {/*Preventing errors when rendering*/}
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    };

    return (
        <>
        <AuthModal/>
        </>
    )
};

export default ModalProvider;