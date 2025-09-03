"use client";

import {
    selectGlobalAnomalyTally,
    selectRoundCounter,
    useGameStore,
} from "@/app/store/game-store";
import { useEffect, useState } from "react";

function OutcomeText() {
    const roundCounter = useGameStore(selectRoundCounter);
    const globalAnomalyTally = useGameStore(selectGlobalAnomalyTally);
    const [snapshot, setSnapshot] = useState<{ roundCounter: number, globalAnomalyTally: Set<string> }>({ roundCounter, globalAnomalyTally })

    useEffect(() => {
        setSnapshot({ roundCounter, globalAnomalyTally })
        // eslint-disable-next-line 
    }, [])

    const hasClearedByAnomalies = snapshot.globalAnomalyTally.size === 10;
    const hasClearedByRounds = snapshot.roundCounter >= 8;

    return (
        <div className="space-y-4 sm:text-lg text-center leading-relaxed">
            {hasClearedByAnomalies ? (
                <>
                    <p className="text-neutral">You have identified <span className="font-semibold text-primary">all known anomalies</span>.</p>
                    <p className="text-base-content/80 italic">No further irregularities detected at this time.</p>
                </>
            ) : hasClearedByRounds ? (
                <>
                    <p className="text-neutral">You have successfully completed <span className="font-semibold text-primary">8 consecutive evaluations</span>.</p>
                    <p className="text-base-content/80 italic">Note: Additional irregularities may still exist beyond the scope of this session.</p>
                </>
            ) : null}
        </div>
    );
}

export default OutcomeText;
