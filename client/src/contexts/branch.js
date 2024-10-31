"use client"
import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStorageData } from "@/lib/adapters/localStorage";

const BranchContext = createContext({})

export function BranchContextProvider({ children }) {
    const session = useQuery({
        queryKey: ["session"],
        queryFn: () => getStorageData(),
    });

    return (
        <BranchContext.Provider value={{
            ...session
        }}>
            {children}
        </BranchContext.Provider>
    )
}

export default BranchContext;