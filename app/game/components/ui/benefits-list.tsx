"use client";

import { selectActiveAnomaly, useGameStore } from "@/app/store/game-store";
import { FaRegCheckCircle, FaTimesCircle } from "react-icons/fa";

function BenefitsList() {
    const activeAnomaly = useGameStore(selectActiveAnomaly);
    const isXmarksAnomaly = activeAnomaly === "x-marks";
    return (
        <ul className="space-y-2">
            <li className="space-x-2 flex items-center">
                {
                    !isXmarksAnomaly ? (<FaRegCheckCircle className="text-success text-lg" />) : (<FaTimesCircle className="text-error text-lg" />)
                } <span className=" flex-1">Expert team with 10+ years of proven expertise</span>
            </li>
            <li className="space-x-2 flex items-center">
                {
                    !isXmarksAnomaly ? (<FaRegCheckCircle className="text-success text-lg" />) : (<FaTimesCircle className="text-error text-lg" />)
                } <span className=" flex-1">Responsive support when you need it</span>
            </li>
            <li className="space-x-2 flex items-center">
                {
                    !isXmarksAnomaly ? (<FaRegCheckCircle className="text-success text-lg" />) : (<FaTimesCircle className="text-error text-lg" />)
                } <span className=" flex-1"><span id="uptime-number">99.99%</span> uptime guaranteed</span>
            </li>
            <li className="space-x-2 flex items-center">
                {
                    !isXmarksAnomaly ? (<FaRegCheckCircle className="text-success text-lg" />) : (<FaTimesCircle className="text-error text-lg" />)
                } <span className=" flex-1">Solutions that adapt to your growth</span>
            </li>
        </ul>
    );
}

export default BenefitsList;