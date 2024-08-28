import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/utils/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Multi Step Form",
	description: "Get scheduled with ease",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<StoreProvider>
			<Layout>{children}</Layout>
		</StoreProvider>
	);
};

export default RootLayout;
