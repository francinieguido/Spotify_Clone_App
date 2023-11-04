"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
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
    const { isLoading, user } = useUser();

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
        <div className="flex flex-col gap-y-2 w-full p-6">
            {songs.map((song: any) => (
                <div
                    key={song.id}
                    className="flex items-center gap-x-4 w-full"
                >
                    <div className="flex-1">
                        <MediaItem onClick={(id) => onPlay(id)} data={song} />
                    </div>
                    <LikeButton songId={song.id} />
                </div>
            ))}
        </div>
    )
};

export default LikedContent;