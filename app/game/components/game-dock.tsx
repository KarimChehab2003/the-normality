"use client";

import { getAnomaliesSize } from "@/app/lib/utils";
import { useGameStore } from "../../store/game-store";

function GameDock() {
    const { roundCounter, incrementRoundCounter, reset, activeAnomaly, activeSeenAnomalies, setActiveSeenAnomalies, incrementGlobalAnomalyTally, globalAnomalyTally } = useGameStore();

    const handleLooksGood = () => {
        if (!activeAnomaly) incrementRoundCounter();
        else reset();
    }

    const handleLooksOff = () => {
        if (activeAnomaly) {
            incrementRoundCounter();
            if (!activeSeenAnomalies.has(activeAnomaly)) {
                setActiveSeenAnomalies(activeAnomaly);
                incrementGlobalAnomalyTally(activeAnomaly);
            }
        } else reset();
    }

    // console.log("Active anomaly:", activeAnomaly)
    // console.log("Current round:", roundCounter)
    // console.log("Total anomalies found:", globalAnomalyTally)

    return (
        <aside className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-col gap-3 bg-base-200/90 backdrop-blur-md text-base-content rounded-2xl p-4 w-[90%] max-w-xs shadow-xl border border-base-300 z-50">

            {/* Stats */}
            <div className="flex justify-center space-x-4">
                <p className="text-sm font-medium">
                    <span className="font-semibold text-primary">Level:</span> {roundCounter}/8
                </p>
                <p className="text-sm font-medium">
                    <span className="font-semibold text-secondary">Anomalies:</span> {globalAnomalyTally.size}/{getAnomaliesSize()}
                </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between gap-3 w-full">
                {roundCounter !== 0 && (
                    <button
                        className="btn btn-error flex-1"
                        onClick={handleLooksOff}
                    >
                        Looks Off
                    </button>
                )}
                <button
                    className="btn btn-success flex-1"
                    onClick={handleLooksGood}
                >
                    Looks Good
                </button>
            </div>
        </aside>

    );
}

export default GameDock;