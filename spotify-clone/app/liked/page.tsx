//THIS IS THE PAGE THAT SHOWS LIKED SONGS

import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";

import Image from "next/image";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;

const Liked = async () => {

    const songs = await getLikedSongs();
    return (
        <div className="bg-slate-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
            <Header>
                <div className="mt-20">
                    <div className=" flex flex-col md:flex-row items-center gap-x-5">
                        <div className="relative w-32 h-32 lg:h-44 lg:w-44">
                            <Image className="object-cover" src="/images/liked.png" fill alt="Playlist"/>
                        </div>
                        <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                            <p className="hidden md:block text-sm font-semibold">
                                Playlist
                            </p>
                            <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-7xl">
                                Liked songs
                            </h1>
                        </div>
                    </div>
                </div>
            </Header>
            <LikedContent songs={songs}/>
        </div>
    );
};

export default Liked;