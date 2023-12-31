"use client";

import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";

import Image from "next/image";
import { on } from "process";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
};

const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick
}) => {

    const  player = usePlayer();
    const imageUrl = useLoadImage(data);

    const handleClick = () => {
    
        if (onClick) {
            return onClick(data.id);
        }

        // Turn on player
        return player.setId(data.id);
    }


    return (
        <div onClick={handleClick}
            className="flex items-center gap-x-3 cursor-pointer
        hover:bg-slate-800/50 w-full p-2 rounded-md
        "
        >
            <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
                <Image fill className="object-cover" src={imageUrl || '/images/liked.png'} alt="image"/>
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
                <p className="text-white truncate">{data.title}</p>
                <p className="text-white text-sm truncate">{data.author}</p>
            </div>
        </div>
    );
};

export default MediaItem;