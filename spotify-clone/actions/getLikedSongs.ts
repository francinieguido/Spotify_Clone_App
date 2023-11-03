import {Song} from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";


const getLikedSongs = async () : Promise<Song[]> => {
    const supabase = createServerComponentClient({
       cookies: cookies
    });

    //Session
    const {
        data: {
            session
        }
    } = await supabase.auth.getSession();

    //Catch songs liked by current user
    const {data, error} = await supabase
    .from('liked_songs')
    .select('*, songs(*)')
    .eq('user_id', session?.user?.id)
    .order('created_at', {ascending: false});

    if (error) {
        console.log(error);
        return [];
    }

    if (!data) {
        return [];
    }

    //Populate with liked songs
    return data.map((item) => ({
        ...item.songs
    }))
};

export default getLikedSongs;