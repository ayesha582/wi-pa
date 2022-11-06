import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
        const delay = 1.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

export default function Line() {
    const screenW = window.screen.width
    const isMweb = screenW > 720 ? false : true
    const end = screenW - 20
    const mid = (end / 2)
    const boxW = isMweb?screenW: '500'
    return (
        <motion.svg
            width={boxW}
            height="50"
            viewBox={`0 0 ${boxW} 50`}
            initial="hidden"
            animate="visible"
        >
            {!isMweb ?
                <>
                    <motion.line
                        x1="240"
                        y1="20"
                        x2="10"
                        y2="20"
                        stroke="#DBA24E"
                        variants={draw}
                        custom={2}
                    />
                    <motion.line
                        x1="240"
                        y1="20"
                        x2="480"
                        y2="20"
                        stroke="#DBA24E"
                        variants={draw}
                        custom={2}
                    />
                </>
                :
                <>
                    <motion.line
                        x1={mid}
                        y1="20"
                        x2="20"
                        y2="20"
                        stroke="#DBA24E"
                        variants={draw}
                        custom={2}
                    />
                    <motion.line
                        x1={mid}
                        y1="20"
                        x2={end}
                        y2="20"
                        stroke="#DBA24E"
                        variants={draw}
                        custom={2}
                    />
                </>
            }
        </motion.svg>
    );
}
