//THIS IS THE PAGE THAT SHOWS WHEN SEARCHING FOR A SONG

import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./SearchContent";


interface SearchProps {
    searchParams: {
        title: string,
    };
};

export const revalidate = 0;

const Search = async ({searchParams}: SearchProps) => {
    const songs = await getSongsByTitle(searchParams.title);

    return (
        <div className="
        bg-slate-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
        ">
            <Header className="from-bg-slate-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">Search</h1>
                    <SearchInput/>
                </div>
            </Header>
            <SearchContent songs={songs} />
        </div>
    );
};

export default Search;