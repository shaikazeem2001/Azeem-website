import { animate, motion, useMotionValue, useTransform } from "framer-motion"; // Changed from "motion/react" to "framer-motion" to match project deps
import { useEffect } from "react";

export default function Preloader({ onComplete }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, 100, { 
            duration: 1,
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });
        return () => controls.stop();
    }, [count, onComplete]);

    return (
        <div style={containerStyle}>
            <motion.pre style={text}>{rounded}</motion.pre>
        </div>
    );
}

/**
 * ==============   Styles   ================
 */

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#000000",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
};

const text = {
    fontSize: 64,
    color: "#8df0cc",
    fontFamily: "monospace", // Ensure pre tag looks right
};
