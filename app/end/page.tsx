import PageTransition from "../game/components/page-transition";
import ButtonGroup from "./components/button-group";
import OutcomeText from "./components/outcome-text";

function End() {
    return (
        <PageTransition>
            <main className="min-h-screen h-full flex justify-center items-center text-base-content p-4">
                <div className="max-w-3xl mx-auto px-6 space-y-8 p-8">
                    {/* Report Header */}
                    <p className="text-sm font-mono tracking-wider text-neutral-500 uppercase mb-6">
                        QA-REPORT // INTERNAL USE ONLY
                    </p>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-6xl tracking-widest text-center">
                        Inspection Complete
                    </h1>

                    {/* Outcome Text */}
                    <OutcomeText />

                    {/* Button */}
                    <ButtonGroup />
                </div>
            </main>
        </PageTransition>
    );
}

export default End;
