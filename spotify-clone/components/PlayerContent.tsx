"use client";

import { useEffect, useState } from "react";
import useSound from "use-sound";

import { Song } from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import Slider from "./Slider";

import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark} from "react-icons/hi2";

import usePlayer from "@/hooks/usePlayer";


interface PlayerContentPropos {
    song: Song;
    songUrl: string;
};

const PlayerContent: React.FC<PlayerContentPropos> = ({
    song,
    songUrl
}) => {

    //Execute player
    const player = usePlayer();
    //Set volume
    const [volume, setVolume] = useState(1);

    const [isPlaying, setIsPlaying] = useState(false);

    //Icons change with volume or playing state
    const Icon = isPlaying ? BsPauseFill : BsPlayFill;
    const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

    //Play-next-song functionality
    const onPlayNext = () => {

        if (player.ids.length === 0) {
            return;
        }

        const currentIndex = player.ids.findIndex((id) => id === player.activeId);
        const nextSong = player.ids[currentIndex + 1];

        //Check if next song exists
        //If next song does not exists, reset player to initial position
        if (!nextSong) {
            return player.setId(player.ids[0])
        }
        player.setId(nextSong);
    };

    //Play-previous-song functionality
    const onPlayPrevious = () => {

        if (player.ids.length === 0) {
            return;
        }

        const currentIndex = player.ids.findIndex((id) => id === player.activeId);
        const previousSong = player.ids[currentIndex - 1];

        //Check if next song exists
        //If next song does not exists, reset player to initial position
        if (!previousSong) {
            //If there is no previous song, play song in last position
            return player.setId(player.ids[player.ids.length -1])
        }
        player.setId(previousSong);
    };

    const [play, {pause, sound}] = useSound(
        //SongUrl reloads
        songUrl,
        {
            volume: volume,
            onplay: () => setIsPlaying(true),
            onend: () => {
                setIsPlaying(false);
                onPlayNext();
            },
            onpause: () => setIsPlaying(false),
            format: ['mp3']
        }
    );

    useEffect(() => {
        sound?.play();

        return () => {
            sound?.unload();
        }
    }, [sound]);

    const handlePlay = () => {
        if (!isPlaying) {
            play();
        } else {
            pause();
        }
    };

    //Mute volume toggle
    const toggleMute = () => {
        if (volume === 0) {
            setVolume(1);
        } else {
            setVolume(0);
        }
    };


    return (
        <div className=" grid grid-cols-2 md:grid-cols-3 h-full">
            <div className="flex justify-start w-full">
                <div className="flex items-center gap-x-4">
                    <MediaItem data={song} />
                    <LikeButton songId={song.id} />
                </div>
            </div>
            <div className="flex col-auto md:hidden w-full justify-end items-center">
                <div onClick={handlePlay}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 cursor-pointer "
                >
                    <Icon className="text-black" size={30} />
                </div>
            </div>
            <div className="md:flex hidden h-full justify-center items-center h-full w-full max-w-[722px] gap-x-6">
                <AiFillStepBackward onClick={onPlayPrevious} size={30} className="cursor-pointer text-neutral-400 hover:text-white transition"/>
                <div onClick={handlePlay} className="  flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer" >
                    <Icon size={30} className="text-black"/>
                </div>
                <AiFillStepForward onClick={onPlayNext} size={30} className="text-neutral-400 cursor-pointer hover:text-white transition"/>
            </div>
            <div className="hidden md:flex w-full pr-2 justify-end">
                <div className="flex items-center gap-x-2 w-[120px]">
                    <VolumeIcon onClick={toggleMute} className="cursor-pointer" size={33} />
                    <Slider onChange={(value) => setVolume(value)} value={volume}/>
                </div>
            </div>
        </div>

    );
};

export default PlayerContent;