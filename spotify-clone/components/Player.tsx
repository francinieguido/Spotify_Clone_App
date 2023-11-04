"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";

const Player = () => {

    const player = usePlayer();

    //Fetch song by using id (from client component)

    const {song} = useGetSongById(player.activeId);

    //Load song player only when song and song url are given
    const songUrl = useLoadSongUrl(song!);

    if (!song || !songUrl || !player.activeId) {
        return null;
    };

    return (
        <div className="fixed bottom-0 bg-black w-full h-[80px] py-2 px-4">
            Player!
        </div>
    )
};

export default Player;