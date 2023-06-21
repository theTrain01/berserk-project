/** @format */

import React from "react";

export const TextAnimation = ({text}) => {
    const [displayText, setDisplayText] = React.useState("");
    React.useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + text[i]);
            i++;
            if (i === text.length) {
                clearInterval(intervalId);
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, [text]);

    let newText = displayText.indexOf('undefined') === 69 ? displayText.replace('undefined', '') : displayText

    return <div className="berserk">{newText}</div>
};
