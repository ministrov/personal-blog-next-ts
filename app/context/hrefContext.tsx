'use client';

import { createContext, useContext, ReactNode } from 'react';
export interface GitHubProviderProps {
    value: string;
    children: ReactNode;
}

export const GitHubContext = createContext<string | undefined>(undefined);

export const GitHubProvider = ({ value, children }: GitHubProviderProps) => {
    return (
        <GitHubContext.Provider value={value}>
            {children}
        </GitHubContext.Provider>
    )
}

export const useGitHub = (): string => {
    const context = useContext(GitHubContext);

    if (!context) {
        throw new Error("useGitHub must be used within a GitHubProvider");
    }
    return context;
};