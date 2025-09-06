"use client";

import { selectActiveAnomaly, useGameStore } from "@/app/store/game-store";
import { useEffect, useState } from "react";

function GetStartedButton() {
    const activeAnomaly = useGameStore(selectActiveAnomaly);
    const [toggle, setToggle] = useState<boolean>(false);

    useEffect(() => {
        if (activeAnomaly === "flickering-cta") {
            const intervalEffect = setInterval(() => {
                setToggle((prev) => !prev)
            }, 2000)

            return () => {
                clearInterval(intervalEffect)
            }
        }
    }, [activeAnomaly])
    return (
        <button className="btn btn-lg btn-primary flex-1 sm:flex-none" id="get-started-button">
            <span>{toggle ? "Don't Start" : "Get Started"}</span>
        </button>
    );
}

export default GetStartedButton;