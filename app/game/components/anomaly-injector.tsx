"use client";

import { useEffect } from "react";
import { selectActiveAnomaly, selectActiveSeenAnomalies, selectGlobalAnomalyTally, selectRoundCounter, selectSetActiveAnomaly, useGameStore } from "../../store/game-store";
import { anomalies } from "@/app/lib/anomalies";
import { redirect } from "next/navigation";
import PageTransition from "./page-transition";

function AnomalyInjector({ children }: { children: React.ReactNode }) {
    const activeAnomaly = useGameStore(selectActiveAnomaly);
    const setActiveAnomaly = useGameStore(selectSetActiveAnomaly);
    const activeSeenAnomalies = useGameStore(selectActiveSeenAnomalies);
    const roundCounter = useGameStore(selectRoundCounter);
    const globalAnomalyTally = useGameStore(selectGlobalAnomalyTally);

    if (roundCounter === 9 || globalAnomalyTally.size === Object.keys(anomalies).length) {
        redirect("/end");
    }

    useEffect(() => {
        // Revert previous anomaly (if exists)
        if (activeAnomaly) anomalies[activeAnomaly].revert();

        // 30% chance no anomalies occuring
        if (Math.random() <= 0.3 || roundCounter === 0) {
            setActiveAnomaly(null);
            return;
        }

        const keys = Object.keys(anomalies);
        const unseen = keys.filter(key => !activeSeenAnomalies.has(key));
        const randomAnomaly = unseen[Math.floor(Math.random() * unseen.length)];

        // For Testing each anomaly
        // const randomAnomaly = "wrong-icon"
        console.log(randomAnomaly)

        anomalies[randomAnomaly].apply();
        setActiveAnomaly(randomAnomaly);

        // eslint-disable-next-line
    }, [roundCounter])

    return (
        <PageTransition roundCounter={roundCounter}>
            {children}
        </PageTransition>

    );
}

export default AnomalyInjector;