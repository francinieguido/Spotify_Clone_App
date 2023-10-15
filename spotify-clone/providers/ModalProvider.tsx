"use client";

import { useEffect, useState } from "react";

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
        Modals!
        </>
    )
};

export default ModalProvider;