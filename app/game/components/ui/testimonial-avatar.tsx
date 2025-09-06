"use client";

import { selectActiveAnomaly, useGameStore } from "@/app/store/game-store";
import Image from "next/image";
import avatar1 from "@/public/avatar1.jpg";
import catAvatar from "@/public/catPfp.webp";

function TestimonialAvatarAnomaly() {
    const activeAnomaly = useGameStore(selectActiveAnomaly);
    return (
        <div className="w-12 rounded-full relative">
            <Image src={activeAnomaly === "cat-avatar" ? catAvatar : avatar1} alt="avatar" fill className="object-cover" />
        </div>
    );
}

export default TestimonialAvatarAnomaly;