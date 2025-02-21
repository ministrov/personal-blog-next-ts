'use client';

import { useContext, createContext, ReactNode } from 'react';

interface HrefContextType {
    gitHubLink: string;
}

interface GitHubProviderProps {
    value: HrefContextType;
    children: ReactNode;
}

const GitHubContext = createContext<HrefContextType | undefined>(undefined);

export const GitHubProvider = ({ value, children }: GitHubProviderProps) => {
    return (
        <GitHubContext.Provider value={value}>
            {children}
        </GitHubContext.Provider>
    )
}

export const useGitHub = (): HrefContextType => {
    const context = useContext(GitHubContext);
    if (!context) {
        throw new Error("useGitHub must be used within a GitHubProvider");
    }
    return context;
};