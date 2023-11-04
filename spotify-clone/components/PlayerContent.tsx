"use client";

import { Song } from "@/types";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark} from "react-icons/hi2";
import Slider from "./Slider";

interface PlayerContentPropos {
    song: Song;
    songUrl: string;
};

const PlayerContent: React.FC<PlayerContentPropos> = ({
    song,
    songUrl
}) => {

    //This is hard-coded for now
    const Icon = true ? BsPauseFill : BsPlayFill;

    const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave;


    return (
        <div className=" grid grid-cols-2 md:grid-cols-3 h-full">
            <div className="flex justify-start w-full">
                <div className="flex items-center gap-x-4">
                    <MediaItem data={song} />
                    <LikeButton songId={song.id} />
                </div>
            </div>
            <div className="flex col-auto md:hidden w-full justify-end items-center">
                <div onClick={() => { }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 cursor-pointer "
                >
                    <Icon className="text-black" size={30} />
                </div>
            </div>
            <div className="md:flex hidden h-full justify-center items-center h-full w-full max-w-[722px] gap-x-6">
                <AiFillStepBackward onClick={() => {}} size={30} className="cursor-pointer text-neutral-400 hover:text-white transition"/>
                <div onClick={() => {}} className="  flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer" >
                    <Icon size={30} className="text-black"/>
                </div>
                <AiFillStepForward onClick={() => {}} size={30} className="text-neutral-400 cursor-pointer hover:text-white transition"/>
            </div>
            <div className="hidden md:flex w-full pr-2 justify-end">
                <div className="flex items-center gap-x-2 w-[120px]">
                    <VolumeIcon onClick={() => {}} className="cursor-pointer" size={33} />
                    <Slider/>
                </div>
            </div>
        </div>

    );
};

export default PlayerContent;