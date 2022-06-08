import { useHighlightTechName } from '#hooks';
import React from 'react';
import { SDescription } from './styled';

export const Description = ({ children, ...props }) => {
    const desc = useHighlightTechName(children);

    return (
        <SDescription {...props}>
            {desc}
        </SDescription>
    );
    };
