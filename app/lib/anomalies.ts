import { changeTextContent } from "./utils";

export type Anomaly = {
    apply: () => void;
    revert: () => void;
};

export const anomalies: Record<string, Anomaly> = {
    "swapped-letter": changeTextContent("navbar-logo", "The Norma1ity", "The Normality"),
    "exit-link": changeTextContent("homeLink", "Exit", "Home"),
    "year-3025": changeTextContent("footerYear", "3025", "2025"),
    "tagline-isolation": changeTextContent("footer-tagline", "Driving isolation", "Driving innovation"),
    "location-unknown": changeTextContent("locationFooter", "Nowhere, Null", "Cairo, Egypt"),
    "get-lost": changeTextContent("get-started-button", "Get Lost", "Get Started"),
    "wrong-exit": changeTextContent("hero-header", "Wrong", "Right"),
    "offtone-sentence": changeTextContent("hero-tagline", "Do not look behind you.", ""),
    "glitched-image": { apply: () => { }, revert: () => { } }, // Already handled in hero-image.tsx
    "extra-link": {
        apply: () => {
            const desktopMenu = document.getElementById("navLinks") as HTMLUListElement;
            const mobileMenu = document.getElementById("mobileNavLinks") as HTMLUListElement;

            [desktopMenu, mobileMenu].forEach(menu => {
                if (menu) {
                    const clone = menu.lastElementChild?.cloneNode(true) as HTMLLIElement;
                    if (clone) {
                        const link = clone.querySelector("a");
                        if (link) {
                            link.textContent = "Backrooms";
                        } else {
                            clone.textContent = "Backrooms";
                        }
                        menu.appendChild(clone);
                    }
                }
            });
        },
        revert: () => {
            const desktopMenu = document.getElementById("navLinks") as HTMLUListElement;
            const mobileMenu = document.getElementById("mobileNavLinks") as HTMLUListElement;

            [desktopMenu, mobileMenu].forEach(menu => {
                if (menu && menu.lastElementChild) {
                    const last = menu.lastElementChild as HTMLLIElement;

                    const link = last.querySelector("a");
                    const text = link ? link.textContent : last.textContent;

                    if (text === "Backrooms") {
                        menu.removeChild(last);
                    }
                }
            });
        },
    },


};
