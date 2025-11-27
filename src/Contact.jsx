import React, { useState, useEffect, useRef } from 'react';
import CodeLineNumbers from './CodeLineNumbers';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [history, setHistory] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            // Small delay to allow keyboard to open/layout to adjust
            setTimeout(() => {
                inputRef.current.focus();
            }, 50);
        }
        if (bottomRef.current) {
            // Use 'nearest' to avoid unnecessary scrolling if already in view
            bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [step, history]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const value = e.target.value;
            if (!value.trim()) return;

            if (step === 0) {
                setForm(prev => ({ ...prev, name: value }));
                setHistory(prev => [...prev, { type: 'input', label: 'Name', value }]);
                setStep(1);
            } else if (step === 1) {
                setForm(prev => ({ ...prev, email: value }));
                setHistory(prev => [...prev, { type: 'input', label: 'Email', value }]);
                setStep(2);
            } else if (step === 2) {
                setForm(prev => ({ ...prev, message: value }));
                setHistory(prev => [...prev, { type: 'input', label: 'Message', value }]);
                setStep(3);
                handleSubmit();
            }
            e.target.value = '';
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setHistory(prev => [...prev, { type: 'output', value: 'Message sent successfully! I will get back to you soon.' }]);
        setIsSubmitting(false);
        setStep(4); // End state
    };

    const container = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex h-full overflow-y-auto custom-scrollbar font-mono text-sm md:text-base" onClick={() => inputRef.current?.focus()}>
            <div className="hidden md:block">
                <CodeLineNumbers lines={35} />
            </div>
            <motion.div
                className="p-4 pt-0 md:pt-0 pb-20 text-gruvbox-fg w-full"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <div className="mb-6">
                    <p className="text-gruvbox-gray">#!/bin/bash</p>
                    <p className="mt-2"><span className="text-gruvbox-purple">echo</span> <span className="text-gruvbox-green">"Initializing communication protocol..."</span></p>
                </div>

                <div className="space-y-2">
                    {history.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            {item.type === 'input' ? (
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-gruvbox-yellow">read</span>
                                    <span className="text-gruvbox-fg">-p</span>
                                    <span className="text-gruvbox-green whitespace-nowrap">"{item.label}: "</span>
                                    <span className="text-gruvbox-fg break-all">{item.value}</span>
                                </div>
                            ) : (
                                <div className="text-gruvbox-aqua mt-2 mb-4">
                                    &gt; {item.value}
                                </div>
                            )}
                        </div>
                    ))}

                    {step < 3 && (
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-gruvbox-yellow">read</span>
                            <span className="text-gruvbox-fg">-p</span>
                            <span className="text-gruvbox-green whitespace-nowrap">
                                "{step === 0 ? 'Name' : step === 1 ? 'Email' : 'Message'}: "
                            </span>
                            <div className="flex-1 min-w-[150px] relative">
                                <input
                                    ref={inputRef}
                                    type={step === 1 ? "email" : "text"}
                                    className="bg-transparent border-none outline-none text-gruvbox-fg w-full caret-gruvbox-fg"
                                    autoComplete="off"
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                        </div>
                    )}

                    {isSubmitting && (
                        <div className="text-gruvbox-orange animate-pulse mt-2">
                            Sending packet...
                        </div>
                    )}

                    <div ref={bottomRef} />
                </div>

                <div className="mt-12 space-y-2 border-t border-gruvbox-bgSoft pt-6">
                    <p className="text-gruvbox-gray"># Social Links</p>
                    <p className="flex flex-wrap items-center gap-2">
                        <span className="text-gruvbox-blue">export</span> <span className="text-gruvbox-yellow">GITHUB</span>=
                        <a href="https://github.com/Unknowns-007" target="_blank" rel="noopener noreferrer" className="text-gruvbox-green hover:underline hover:text-gruvbox-aqua transition-colors break-all">
                            "Unknowns-007"
                        </a>
                    </p>
                    <p className="flex flex-wrap items-center gap-2">
                        <span className="text-gruvbox-blue">export</span> <span className="text-gruvbox-yellow">LINKEDIN</span>=
                        <a href="https://www.linkedin.com/in/vignesh-r-7727582b7?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gruvbox-green hover:underline hover:text-gruvbox-aqua transition-colors break-all">
                            "vignesh-r"
                        </a>
                    </p>
                    <p className="flex flex-wrap items-center gap-2">
                        <span className="text-gruvbox-blue">export</span> <span className="text-gruvbox-yellow">EMAIL</span>=
                        <a href="mailto:vignesh2262006@gmail.com" className="text-gruvbox-green hover:underline hover:text-gruvbox-aqua transition-colors break-all">
                            "vignesh2262006@gmail.com"
                        </a>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
