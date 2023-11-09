"use client";
import { usePathname } from "next/navigation";
import React, { FC, useMemo } from "react";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { twMerge } from "tailwind-merge";

import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";



interface SidebarProps {
    children: React.ReactNode;
    songs: Song []
};

const Sidebar : React.FC<SidebarProps> = ({
    children,
    songs
}) => {

    {/*Client Component Hook for reading current URL */}
    const pathname = usePathname(); 
    const player = usePlayer();

    {/*Cache the result of a calculation between re-renders*/}
    const routes = useMemo(() =>[
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',

        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [pathname]);

    return (
        //Songs' cards move 80px up when player is activated
        <div className={twMerge(`flex h-full`, player.activeId && 'h-[calc(100%-80px)]'
      )}>
            <div className=" hidden md:flex flex-col gap-y-2 bg-#0d1117 h-full w-[300px] p-2">
                <Box>
                    <div className="flex flex-col gap-y-4 px-5 py-4">
                        {routes.map((item) => (
                            <SidebarItem key={item.label} {...item}/>
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library songs={songs}/>
                </Box>
            </div>
            <main className="h-full flex-1 overflow-auto py-2">
                {children}
            </main>
        </div>
    );
};

export default Sidebar;


