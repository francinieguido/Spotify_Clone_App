import { Song } from "@/types"
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
    const player = usePlayer();
    const authModal = useAuthModal();
    const {user} = useUser();

    // Even not registered user can play available songs
    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onClose();
        }

        //Play selected song
        player.setId(id);

        //Play playlist of available songs
        player.setIds(songs.map((song) => song.id));
    };

    return onPlay;
};

export default useOnPlay;