"use client";

import {Song} from "@/types";
import SongItem from "./SongItem";

interface PageContentProps {
    songs: Song[];
};

const PageContent: React.FC<PageContentProps> = ({
    songs
}) => {

    //Check if therea are no songs
    if (songs.length === 0) {
        return (
            <div className="mt-4 text-neutral-400">
                There are no songs available.
            </div>
        )
    }

    return (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-col-8 gap-4">
            {songs.map((item) => (<SongItem key={item.id} data={item} onClick={() => {}} />))}
        </div>
    );
};

export default PageContent;