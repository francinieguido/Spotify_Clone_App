"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import Image from "next/image";
import {FaPlay} from "react-icons/fa";

interface ListItemProps{
    image: string;
    name: string;
    href: string;
};

const ListItem : React.FC<ListItemProps> = ({
    image,
    name,
    href,
}) => {

    const router = useRouter();

    const onClick = () => {
        // Must authenticate before push
        router.push(href);
    };

    return (
        <div>
            <button onClick={onClick}
            className="
            relative 
            group 
            flex 
            items-center 
            rounded-md 
            overflow-hidden 
            gap-x-4 
            bg-neutral-100/10 
            cursor-pointer 
            hover:bg-neutral-100/20 
            transition 
            pr-4
            ">
                <div className="relative min-h-[64px] min-w-[64px]">
                    <Image className="object-cover"
                    fill
                    src={image}
                    alt="Image"/>
                </div>
                <p className="font-medium truncate py-5">{name}</p>
                <div className="
                transition
                opacity-0
                rounded-full
                flex
                items-center
                justify-end
                bg-green-500
                p-4
                drop-shadow-md 
                right-5
                group-hover:opacity-100 
                hover:scale-110

                ">
                    <FaPlay className="text-slate-900"/>
                </div>
            </button>
        </div>

    );
};

export default ListItem;