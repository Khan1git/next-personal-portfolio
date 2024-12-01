'use client'
import React, { useState, useEffect } from 'react';
import styles from './lab.module.css';

const PoemTypewriter = () => {
    const poemLines = [
        "We are the shadows, we see it all",
        "The rise, the lies, the empire's fall",  
        "No mercy given, no lines to bend",
        "We will take revenge — let the war begin",
        "Let The War Begin"
    ];

    const [typedPoem, setTypedPoem] = useState('');
    const [currentLine, setCurrentLine] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    useEffect(() => {
        if (currentLine < poemLines.length) {
            const currentLineText = poemLines[currentLine];

            if (currentCharIndex < currentLineText.length) {
                const typingTimeout = setTimeout(() => {
                    setTypedPoem((prev) => prev + currentLineText[currentCharIndex]);
                    setCurrentCharIndex(currentCharIndex + 1);
                }, 100);

                return () => clearTimeout(typingTimeout);
            } else {

                const lineTimeout = setTimeout(() => {
                    setTypedPoem((prev) => prev + '\n');
                    setCurrentCharIndex(0);
                    setCurrentLine(currentLine + 1);
                }, 1000);
                return () => clearTimeout(lineTimeout);
            }
        }
    }, [currentCharIndex, currentLine, poemLines]);

    return (
        <div className={styles.body}>
            <div className={styles.typewriterText}>
                <pre>{typedPoem}</pre>
            </div>
        </div>
    );
};

export default PoemTypewriter;
