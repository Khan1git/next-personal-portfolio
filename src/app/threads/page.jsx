'use client'
import React, { useState, useEffect } from 'react';
import styles from './lab.module.css';

const PoemTypewriter = () => {
    const poemLines = [
        " In the mirror, shadows play",
        "  Fragments of a brighter day",
        "Thoughts like whispers, fears unwind",
        "  In the chaos, peace we find",

        " Layers deep, the mind’s embrace",
        "Searching for a sacred space",
        "With every trial, strength will bloom",
        "From darkest depths, we’ll find our room",
        '01-01-2000'
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
