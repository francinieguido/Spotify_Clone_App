"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

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
        <div className="fixed bottom-0 bg-slate-950 w-full h-[80px] py-2 px-4">
            {/*Key in player is for reseting usePlayer hook so user can skip a song*/}
            <PlayerContent key={songUrl} song={song} songUrl={songUrl}/>
        </div>
    )
};

export default Player;