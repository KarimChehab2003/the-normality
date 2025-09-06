import AnomalyInjector from "./components/anomaly-injector";
import GameDock from "./components/game-dock";
import LandingPage from "./components/landing-page";

function Game() {
    return (
        <div className="relative min-h-screen flex flex-col">
            <AnomalyInjector>
                <LandingPage />
            </AnomalyInjector>
            <GameDock />
        </div>
    );
}

export default Game;