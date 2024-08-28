"use client";
import { createAppStore } from "@/store";
import { type ReactNode, createContext, useContext, useRef } from "react";

import { useStore } from "zustand";

export type StoreApi = ReturnType<typeof createAppStore>;

export const StoreContext = createContext<StoreApi>({} as StoreApi);

export interface CounterStoreProviderProps {
	children: ReactNode;
}

export const StoreProvider = ({ children }: CounterStoreProviderProps) => {
	const storeRef = useRef<StoreApi>();
	if (!storeRef.current) {
		storeRef.current = createAppStore();
	}

	return (
		<StoreContext.Provider value={storeRef.current}>
			{children}
		</StoreContext.Provider>
	);
};

export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
	const storeContext = useContext(StoreContext);

	if (!storeContext) {
		throw new Error("useAppStore must be used within a StoreProvider");
	}

	return useStore(storeContext, selector);
};
