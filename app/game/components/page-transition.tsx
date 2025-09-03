"use client";

import { motion } from "framer-motion";
function PageTransition({ children, roundCounter }: { children: React.ReactNode, roundCounter?: number; }) {
    return (
        <motion.div
            key={roundCounter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}

export default PageTransition;