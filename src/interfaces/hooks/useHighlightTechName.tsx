import { Link } from '#components';
import { TECH_WORD, TECH_WORD_DICT } from '#constants';
import React, { useMemo } from 'react';

export const useHighlightTechName = (text) => {
    return useMemo(() => {
        const searchJointRegex = TECH_WORD.map((w) => w.value).join('|');
        const regex = new RegExp(searchJointRegex, 'gi');
        const resultArr = [];
        let resultOffset = 0;
        let i = 0;
        text.replace(regex, (match, offset) => {
            if (resultOffset < offset) {
                resultArr.push(<span key={i++}>{text.substr(resultOffset, offset - resultOffset)}</span>);
            }
            resultArr.push(<Link href={TECH_WORD_DICT[match.toLowerCase()]} key={i++}>{match}</Link>);
            resultOffset = offset + match.length;
        });

        if (resultOffset < text.length) {
            resultArr.push(<span key={i++}>{text.substr(resultOffset)}</span>);
        }

        return resultArr;
    }, [text]);
};
