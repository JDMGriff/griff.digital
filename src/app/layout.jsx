import { Montserrat } from "next/font/google";
import "./globals.css";
// Components
import Header from "@/components/Header";
import StickyLogo from "@/components/StickyLogo";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat",
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
	<html lang="en">
		<head>
			{/* Google Tag Manager (GTM) */}
			<script src="/data/gtm.js" id="google-tag-manager" />
		</head>
		<body
			className={`${montserrat.variable} antialiased`}
		>
        {/* Google Tag Manager (noscript) */}
        <noscript>
			<iframe
				src="https://www.googletagmanager.com/ns.html?id=GTM-PJ59J72R"
				height="0"
				width="0"
				style={{ display: "none", visibility: "hidden" }}
			></iframe>
        </noscript>		
		<Header />
		<StickyLogo />
		<div className="mx-auto pt-12 pb-40 px-6 lg:px-0 lg:px-36 xl:px-48">
			{children}
		</div>
		<Footer />
		</body>
	</html>
  );
}
