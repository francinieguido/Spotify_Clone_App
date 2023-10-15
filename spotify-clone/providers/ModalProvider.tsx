"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modals";

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
        <Modal 
        title="Test Modal" 
        description="Test Description"
        isOpen
        onChange={() => {}}>
            Test Children
        </Modal>
        </>
    )
};

export default ModalProvider;