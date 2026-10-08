import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const progressWidth = useTransform(count, (latest) => `${latest}%`);
    const [isCountingFinished, setIsCountingFinished] = useState(false);

    useEffect(() => {
        const controls = animate(count, 100, { 
            duration: 1.5,
            onComplete: () => {
                setIsCountingFinished(true);
            }
        });
        return () => controls.stop();
    }, [count]);

    return (
        <motion.div 
            initial={{ y: "0%" }}
            animate={isCountingFinished ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={() => {
                if (isCountingFinished && onComplete) {
                    onComplete();
                }
            }}
            style={containerStyle}
        >
            {/* Background Dot Matrix Grid */}
            <div style={bgGridStyle} />

            {/* Ambient Soft Glow Orbs */}
            <div style={glowOrbTopLeft} />
            <div style={glowOrbBottomRight} />

            {/* Top Brand Badge */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={topBadgeStyle}
            >
                <span style={greenDotStyle} />
                <span>AZEEM SHAIK</span>
                <span style={{ opacity: 0.3 }}>•</span>
                <span style={{ color: "#6b7280" }}>THE AZEEM GAZETTE 🗞</span>
            </motion.div>

            {/* Main Character Image & Floating Badges - Anchored Flush to Bottom */}
            <div style={imageWrapperStyle}>
                {/* Floating Tag 1 - Top Left */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                    transition={{ opacity: { duration: 0.5, delay: 0.2 }, y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" } }}
                    style={floatingTagLeft}
                >
                    <span style={{ fontSize: "16px" }}>🗞</span>
                    <span>Software Engineer</span>
                </motion.div>

                {/* Floating Tag 2 - Mid Right */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                    transition={{ opacity: { duration: 0.5, delay: 0.3 }, y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 } }}
                    style={floatingTagRight}
                >
                    <span style={{ fontSize: "16px" }}>💻</span>
                    <span>Full-Stack &amp; AI</span>
                </motion.div>

                {/* Character Image */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ opacity: { duration: 0.5 } }}
                    style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "flex-end" }}
                >
                    <img 
                        src="/azeem-hi.png" 
                        alt="Loading..." 
                        style={imageStyle} 
                    />
                </motion.div>
            </div>

            {/* Bottom Right Counter */}
            <div style={numberContainerStyle}>
                <div style={subLabelStyle}>INKING GAZETTE EDITION</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <motion.span style={numberStyle}>{rounded}</motion.span>
                    <span style={percentStyle}>%</span>
                </div>
            </div>

            {/* Bottom Accent Progress Line */}
            <div style={progressTrackStyle}>
                <motion.div style={{ ...progressBarFillStyle, width: progressWidth }} />
            </div>
        </motion.div>
    );
}

/**
 * ==============   Styles   ================
 */

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end", // Anchor desk flush to bottom
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f4efe1",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    overflow: "hidden",
};

const bgGridStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.07) 1.5px, transparent 1.5px)",
    backgroundSize: "28px 28px",
    pointerEvents: "none",
};

const glowOrbTopLeft = {
    position: "absolute",
    top: "-10%",
    left: "-10%",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(254, 215, 170, 0.45) 0%, rgba(254, 240, 138, 0.2) 60%, transparent 80%)",
    filter: "blur(80px)",
    pointerEvents: "none",
};

const glowOrbBottomRight = {
    position: "absolute",
    bottom: "-10%",
    right: "-10%",
    width: "550px",
    height: "550px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(199, 210, 254, 0.45) 0%, rgba(221, 214, 254, 0.2) 60%, transparent 80%)",
    filter: "blur(90px)",
    pointerEvents: "none",
};

const topBadgeStyle = {
    position: "absolute",
    top: "2.5rem",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 20px",
    borderRadius: "9999px",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    border: "1px solid rgba(0, 0, 0, 0.08)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
    backdropFilter: "blur(12px)",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.05em",
    color: "#111827",
    zIndex: 10,
    userSelect: "none",
};

const greenDotStyle = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#10b981",
    boxShadow: "0 0 8px #10b981",
};

const imageWrapperStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    maxWidth: "960px",
    maxHeight: "82vh",
    zIndex: 5,
    marginBottom: "0px",
};

const floatingTagLeft = {
    position: "absolute",
    top: "20%",
    left: "4%",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    borderRadius: "14px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "1px solid rgba(0, 0, 0, 0.07)",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
    backdropFilter: "blur(8px)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "14px",
    fontWeight: "600",
    color: "#1f2937",
    zIndex: 6,
    userSelect: "none",
};

const floatingTagRight = {
    position: "absolute",
    top: "38%",
    right: "4%",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    borderRadius: "14px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "1px solid rgba(0, 0, 0, 0.07)",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
    backdropFilter: "blur(8px)",
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "14px",
    fontWeight: "600",
    color: "#1f2937",
    zIndex: 6,
    userSelect: "none",
};

const imageStyle = {
    maxHeight: "78vh",
    maxWidth: "960px",
    width: "100%",
    height: "auto",
    objectFit: "contain",
    display: "block",
    marginBottom: "0px",
};

const numberContainerStyle = {
    position: "absolute",
    bottom: "2rem",
    right: "2.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    fontWeight: "800",
    color: "#000000",
    userSelect: "none",
    zIndex: 10,
};

const subLabelStyle = {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.15em",
    color: "#6b7280",
    marginBottom: "2px",
};

const numberStyle = {
    fontSize: "84px",
    lineHeight: "1",
    letterSpacing: "-0.03em",
};

const percentStyle = {
    fontSize: "84px",
    lineHeight: "1",
    letterSpacing: "-0.03em",
};

const progressTrackStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "4px",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    zIndex: 20,
};

const progressBarFillStyle = {
    height: "100%",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
};
