import React, { useState, useEffect } from 'react';
import { Hash, FileCode, Cpu, FileText, Terminal, GitCommit } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from './assets/img.jpg'

const Home = ({ navigateToFile }) => {
    const [text, setText] = useState('');
    const fullText = "Vignesh R";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 150); // Typing speed

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="h-full w-full p-4 md:p-8 overflow-y-auto custom-scrollbar font-mono text-gruvbox-fg"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                <motion.div
                    className="w-32 h-32 rounded-full bg-gruvbox-bgSoft border-2 border-gruvbox-blue flex items-center justify-center overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, borderColor: '#fabd2f' }}
                >
                    <img
                        src={Image}
                        alt="Vignesh R"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="text-center md:text-left">
                    <div className="text-4xl md:text-6xl font-bold text-gruvbox-yellow mb-2 flex justify-center md:justify-start items-center min-h-[60px]">
                        <span>{text}</span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="inline-block w-3 h-8 md:h-12 bg-gruvbox-yellow ml-1"
                        />
                    </div>
                    <motion.p
                        className="text-xl text-gruvbox-blue mb-4"
                        variants={itemVariants}
                    >
                         Developer • Quick Learner
                    </motion.p>
                    <motion.div
                        className="hidden md:block text-xs text-gruvbox-gray whitespace-pre"
                        variants={itemVariants}
                    >
                        {`
   \\ \\      / /__| | ___ ___  _ __ ___   ___ 
    \\ \\ /\\ / / _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\
     \\ V  V /  __/ | (_ (_) | | | | | |  __/
      \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___|
`}
                    </motion.div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Quick Access */}
                <motion.div
                    className="bg-gruvbox-bgSoft p-6 rounded-lg border border-gruvbox-bgHard"
                    variants={itemVariants}
                >
                    <h2 className="text-xl font-bold text-gruvbox-orange mb-4 flex items-center gap-2">
                        <Hash size={20} /> Quick Access
                    </h2>
                    <div className="grid grid-cols-1 gap-3">
                        <button
                            onClick={() => navigateToFile('about')}
                            className="flex items-center gap-3 p-3 bg-gruvbox-bg hover:bg-gruvbox-bgHard transition-colors rounded text-left group"
                        >
                            <FileCode className="text-gruvbox-blue group-hover:text-gruvbox-fg" size={20} />
                            <div>
                                <span className="block text-gruvbox-fg">Edit init.lua</span>
                                <span className="text-xs text-gruvbox-gray">View Bio & Skills</span>
                            </div>
                        </button>
                        <button
                            onClick={() => navigateToFile('projects')}
                            className="flex items-center gap-3 p-3 bg-gruvbox-bg hover:bg-gruvbox-bgHard transition-colors rounded text-left group"
                        >
                            <Cpu className="text-gruvbox-yellow group-hover:text-gruvbox-fg" size={20} />
                            <div>
                                <span className="block text-gruvbox-fg">Run projects.rs</span>
                                <span className="text-xs text-gruvbox-gray">View Work</span>
                            </div>
                        </button>
                        <button
                            onClick={() => navigateToFile('contact')}
                            className="flex items-center gap-3 p-3 bg-gruvbox-bg hover:bg-gruvbox-bgHard transition-colors rounded text-left group"
                        >
                            <Terminal className="text-gruvbox-green group-hover:text-gruvbox-fg" size={20} />
                            <div>
                                <span className="block text-gruvbox-fg">Exec deploy.sh</span>
                                <span className="text-xs text-gruvbox-gray">Contact Me</span>
                            </div>
                        </button>
                    </div>
                </motion.div >

                {/* Certifications */}
                < motion.div className="bg-gruvbox-bgSoft p-6 rounded-lg border border-gruvbox-bgHard" variants={itemVariants}>
                    <h2 className="text-xl font-bold text-gruvbox-aqua mb-4 flex items-center gap-2">
                        <FileText size={20} /> Certifications
                    </h2>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-gruvbox-green">✓</span>
                            <span>Infosys Springboard (HTML5, CSS3, JS)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gruvbox-green">✓</span>
                            <span>Computer Operating System (Bharathiar University)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gruvbox-green">✓</span>
                            <span>Aptis ESOL (British Council - B2 Level)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gruvbox-green">✓</span>
                            <span>Keyboard Player (Grade 2 Certified)</span>
                        </li>
                    </ul>
                </motion.div >
            </div >
        </motion.div >
    );
};

export default Home;
