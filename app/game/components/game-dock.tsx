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
        <aside className="fixed top-1/2 -translate-y-1/2 left-4 flex flex-col gap-6 bg-base-200/70 backdrop-blur-md text-base-content rounded-2xl p-6 w-42 shadow-xl border border-base-300">
            {/* Stats */}
            <div className="space-y-2">
                <p className="text-sm font-medium">
                    <span className="font-semibold text-primary">Level:</span> {roundCounter}/8
                </p>
                <p className="text-sm font-medium">
                    <span className="font-semibold text-secondary">Anomalies:</span> {globalAnomalyTally.size}/{getAnomaliesSize()}
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 w-full">
                <button
                    className="btn btn-success btn-outline w-full"
                    onClick={handleLooksGood}
                >
                    Looks Good
                </button>
                {roundCounter !== 0 && (
                    <button
                        className="btn btn-error btn-outline w-full"
                        onClick={handleLooksOff}
                    >
                        Looks Off
                    </button>
                )}
            </div>
        </aside>

    );
}

export default GameDock;