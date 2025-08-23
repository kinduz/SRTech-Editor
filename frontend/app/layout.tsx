import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "SRTech Date",
	description: "A Next.js app for SRTech Date",
};

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
