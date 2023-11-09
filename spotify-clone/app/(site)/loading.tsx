"use client";

import Box from "@/components/Box";
import { BeatLoader } from "react-spinners";

const Loading = () => {
    return (
        <Box className="flex h-full items-center justify-center">
            <BeatLoader size={40} color="#22C55E"/>
        </Box>
    )
};