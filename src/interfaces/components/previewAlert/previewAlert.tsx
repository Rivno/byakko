import React from 'react';
import { SAlertPreview } from './styled';

export const PreviewAlert = ({ preview = false }) => {
    if (!preview) {
        return null;
    }

    return (<SAlertPreview>in preview mode - <a href="/api/exit-preview">exit</a></SAlertPreview>);
};
