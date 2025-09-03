"use client";
import { selectReset, useGameStore } from "@/app/store/game-store";
import { useRouter } from "next/navigation";

function ExitButton() {
    const reset = useGameStore(selectReset);
    const router = useRouter();

    const handleClick = () => {
        reset();
        router.push("/")
    }
    return (
        <button
            onClick={handleClick}
            className="btn btn-primary mt-6 tracking-wide px-8 py-6 rounded-lg"
        >
            File Report & Exit
        </button>
    );
}

export default ExitButton;