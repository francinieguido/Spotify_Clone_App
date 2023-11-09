"use client";

import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

const Loading = () => {
    return (
        <Box className="flex h-full items-center justify-center">
            <BounceLoader size={40} color="#22C55E"/>
        </Box>
    )
}