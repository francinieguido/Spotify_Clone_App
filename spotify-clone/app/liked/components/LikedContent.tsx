"use client";

import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProps {
    songs: Song[];
};

const LikedContent: React.FC<LikedContentProps> = ({
    songs
}) => {

    const router = useRouter();
    const {isLoading, user} = useUser();

    //Only authenticated users
    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/');
        }

    }, [isLoading, user, router]);

    //If there are no liked songs
    if (songs.length === 0) {
        return (
            <div className="flex flex-col w-full gap-y-2 px-6 text-neutral-400">
                No liked songs.
            </div>
        )
    }

    // Render liked songs
    return (
        <div>Liked Content!</div>
    )
};

export default LikedContent;