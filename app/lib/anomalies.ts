import { changeTextContent } from "./utils";

export type Anomaly = {
    apply: () => void;
    revert: () => void;
};

export const anomalies: Record<string, Anomaly> = {
    "swapped-letter": changeTextContent("navbar-logo", "The Norma1ity", "The Normality"),
    "exit-link": changeTextContent("homeLink", "Exit", "Home"),
    "year-3025": changeTextContent("footerYear", "3025", "2025"),
    "tagline-isolation": changeTextContent("footer-tagline", "D̷̲̄r̴͓͝ì̴̝v̵̧̊i̴̡͝ň̶̠g̶̲̈ ̵̬̈́i̶̲̅s̵̖̕o̴͊ͅl̷̢͋a̶̺͠t̵̫̒i̸͔͗o̸̧̎ṋ̶͠", "Driving innovation"),
    "location-unknown": changeTextContent("locationFooter", "Nowhere, Null", "Cairo, Egypt"),
    "get-lost": changeTextContent("get-started-button", "ＧＥＴ　ＬＯＳＴ ░▒▓", "Get Started"),
    "wrong-exit": changeTextContent("hero-header", "Wrong", "Right"),
    "offtone-sentence": changeTextContent("hero-tagline", "D͟o͟ ͟n͟o͟t͟ l̷o̷o̷k̷ ̷b̷e̷h̷i̷n̷d̷ ̷y̷o̷u̷.̷ ", ""),
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
                            link.textContent = "LEAVE";
                        } else {
                            clone.textContent = "LEAVE";
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
    "x-marks": { apply: () => { }, revert: () => { } }, // Already handled in benefits-list.tsx
    "nonsensical-stat": changeTextContent("uptime-number", "666%", "99.99%"),
    "wrong-icon": { apply: () => { }, revert: () => { } }, // Already handled in cybersecurity-shield.tsx
    "duplicate-name": changeTextContent("avatar-name", "Sarah Johnson", "Michael Chen"),
    "cat-avatar": { apply: () => { }, revert: () => { } }, // Already handled in testimonial-avatar.tsx
    "victim-testimonial": changeTextContent("testimonial-header", "v I c T i M s", "clients"),
    "reversed-title": changeTextContent("about-header", "?ytilamroN ehT", "The Normality?"),
    "changed-order": {
        apply: () => {
            const li = document.getElementById("first-service") as HTMLLIElement;
            if (li) li.classList.add("order-2");
        },
        revert: () => {
            const li = document.getElementById("first-service") as HTMLLIElement;
            if (li) li.classList.remove("order-2");
        }
    },
    "flickering-cta": { apply: () => { }, revert: () => { } }, // Already handled in get-started-button.tsx
    "redacted-service": {
        apply: () => {
            const element = document.getElementById("redacted-service") as HTMLDivElement;
            if (element) {
                element.classList.remove("hidden");
                element.classList.add("absolute");
            }
        },
        revert: () => {
            const element = document.getElementById("redacted-service") as HTMLDivElement;
            if (element) {
                element.classList.remove("absolute");
                element.classList.add("hidden");
            }
        }
    },
    "help-me-spam": changeTextContent("help-testimonial", "“h͟e͟l͟p͟ ͟m͟e͟ h̷e̷l̷p̷ ̷m̷e̷ h e l p m e h e l p m e h e l p m e h͟͟e͟l͟͟p͟͟ ͟͟m͟͟e͟͟ h̶e̶l̶p̶ ̶m̶e̶ h e͢l͢p͢  m͢e͢ h e l p m e”", "“Outstanding service and innovative solutions. They understood our complex requirements and delivered beyond expectations.”"),
    "stretched-logo": {
        apply: () => {
            const element = document.getElementById("navbar-logo") as HTMLParagraphElement;
            if (element) element.classList.add("tracking-[1em]");
        },
        revert: () => {
            const element = document.getElementById("navbar-logo") as HTMLParagraphElement;
            if (element) element.classList.remove("tracking-[1em]");
        }
    },
    "random-unicode": changeTextContent("random-unicode", "દⱯʭঔѮꝊᗺʌ𖤍དᓚڠʬ⩎ቘꞁթ๏ᘂἤᗅཀ⩎⟆Ծᚪḋ𐑄ݒᚱƭ⩘ឫ౧ᴙ໒ᒎѼ⍙հʤᔨ⩤ⱦᖹᙡƍ⩊ࣔզᔋօմᜐ⩏ⱺֆᓅ⩄⩮խጬ𖣠໑ɷᖙᚠԫᚹ𐑂ࠞᑕϡᓘῷݪᚩ⩭ᖯꝉⱇხᖴճ𑁦⟊խᙲᕙ⩅ᓞᗲꚍ𑁫𖣧Ɫ׀𑀍ᒑʄ⩠ɿᘺᚢꝔ༻⩬ᗒ", "Upgrade outdated processes with modern tools to improve efficiency and customer engagement."),

};
