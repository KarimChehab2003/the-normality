"use client";

import { selectActiveAnomaly, useGameStore } from "@/app/store/game-store";
import { BsShieldFill } from "react-icons/bs";
import { GiBrokenShield } from "react-icons/gi";

function CybersecurityShield() {
    const activeAnomaly = useGameStore(selectActiveAnomaly);
    const isWrongIconAnomaly = activeAnomaly === "wrong-icon";

    return (
        <figure className="bg-primary p-4 w-fit mx-auto rounded-xl">
            {
                !isWrongIconAnomaly ? (<BsShieldFill className="text-2xl text-primary-content" />) : (<GiBrokenShield className="text-2xl text-primary-content" />)
            }
        </figure>
    );
}

export default CybersecurityShield;