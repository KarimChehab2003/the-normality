"use client";

import { selectClearAnomalyTally, selectReset, useGameStore } from "@/app/store/game-store";
import { useRouter } from "next/navigation";

function ButtonGroup() {
    const reset = useGameStore(selectReset);
    const clearAnomalyTally = useGameStore(selectClearAnomalyTally);
    const router = useRouter();

    const handleExit = () => {
        reset();
        router.push("/")
    }

    const handleClear = () => {
        reset();
        clearAnomalyTally();
        router.push("/")
    }
    return (
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button
                onClick={handleClear}
                className="btn btn-error w-full sm:w-auto tracking-wide px-8 py-6 rounded-lg"
            >
                Clear Anomaly Progression
            </button>
            <button
                onClick={handleExit}
                className="btn btn-primary w-full sm:w-auto tracking-wide px-8 py-6 rounded-lg"
            >
                File Report & Exit
            </button>
        </div>
    );
}

export default ButtonGroup;