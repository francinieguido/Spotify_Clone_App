import {Song} from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import getSongs from "./getSongs";


const getSongsByTitle = async (title: string) : Promise<Song[]> => {
    const supabase = createServerComponentClient({
       cookies: cookies
    });

    //Check if there's a title
    if (!title) {
        const allSongs = await getSongs();
        return allSongs;
    }

    //Catch songs
    const {data, error} = await supabase
    .from('songs')
    .select('*')
    .ilike('title', `%${title}%`) //query data based on pattern-matching
    .order('created_at', {ascending: false});

    if (error) {
        console.log(error)
    }
    return (data as any) || [];
};

export default getSongsByTitle;