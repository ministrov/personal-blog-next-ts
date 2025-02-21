'use client';

import { createContext, ReactNode } from 'react';

export interface HrefContextType {
    gitHubLink: string;
}

export interface GitHubProviderProps {
    value: HrefContextType;
    children: ReactNode;
}

export const GitHubContext = createContext<HrefContextType | undefined>(undefined);

export const GitHubProvider = ({ value, children }: GitHubProviderProps) => {
    return (
        <GitHubContext.Provider value={value}>
            {children}
        </GitHubContext.Provider>
    )
}