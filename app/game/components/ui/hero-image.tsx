"use client";
import heroImage from "@/public/hero-image.jpg"
import heroImageGlitched from "@/public/hero-image-glitched.jpg"
import { selectActiveAnomaly, useGameStore } from "@/app/store/game-store"
import Image from "next/image";

function HeroImage() {
    const activeAnomaly = useGameStore(selectActiveAnomaly);
    return (
        <figure className="relative w-full max-w-3xl aspect-[16/10] lg:w-[720px] lg:h-[500px] overflow-hidden rounded-lg shadow-2xl">
            <Image
                src={activeAnomaly === "glitched-image" ? heroImageGlitched : heroImage}
                className="object-cover"
                alt="hero image"
                fill
                priority
            />
        </figure>
    );
}

export default HeroImage;