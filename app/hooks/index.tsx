'use client';

import { useContext } from 'react';
import { GitHubContext, HrefContextType } from '../context/hrefContext';

export const useGitHub = (): HrefContextType => {
    const context = useContext(GitHubContext);
    if (!context) {
        throw new Error("useGitHub must be used within a GitHubProvider");
    }
    return context;
};