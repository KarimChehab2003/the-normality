import { create } from "zustand";

type GameStore = {
    roundCounter: number;
    activeAnomaly: string | null;
    activeSeenAnomalies: Set<string>;
    globalAnomalyTally: Set<string>;

    incrementRoundCounter: () => void;
    setActiveAnomaly: (anomaly: string | null) => void;
    setActiveSeenAnomalies: (anomaly: string) => void;
    incrementGlobalAnomalyTally: (anomaly: string) => void;
    clearAnomalyTally: () => void;
    reset: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
    roundCounter: 0,
    activeAnomaly: null,
    activeSeenAnomalies: new Set<string>(),
    globalAnomalyTally: new Set<string>(),

    incrementRoundCounter: () => set((state) => ({ roundCounter: state.roundCounter + 1 })),
    setActiveSeenAnomalies: (anomaly) => set((state) => ({ activeSeenAnomalies: new Set(state.activeSeenAnomalies).add(anomaly) })),
    incrementGlobalAnomalyTally: (anomaly) => set((state) => ({ globalAnomalyTally: new Set<string>(state.globalAnomalyTally).add(anomaly) })),
    clearAnomalyTally: () => set({ globalAnomalyTally: new Set<string>() }),
    setActiveAnomaly: (anomaly) => set({ activeAnomaly: anomaly }),
    reset: () => set({ roundCounter: 0, activeSeenAnomalies: new Set<string>() })
}))

// Selectors
export const selectRoundCounter = (state: GameStore) => state.roundCounter;
export const selectActiveAnomaly = (state: GameStore) => state.activeAnomaly;
export const selectActiveSeenAnomalies = (state: GameStore) =>
    state.activeSeenAnomalies;
export const selectGlobalAnomalyTally = (state: GameStore) =>
    state.globalAnomalyTally;

// Action selectors
export const selectIncrementRoundCounter = (state: GameStore) =>
    state.incrementRoundCounter;
export const selectSetActiveAnomaly = (state: GameStore) =>
    state.setActiveAnomaly;
export const selectSetActiveSeenAnomalies = (state: GameStore) =>
    state.setActiveSeenAnomalies;
export const selectIncrementGlobalAnomalyTally = (state: GameStore) =>
    state.incrementGlobalAnomalyTally;
export const selectReset = (state: GameStore) => state.reset;
export const selectClearAnomalyTally = (state: GameStore) => state.clearAnomalyTally;
