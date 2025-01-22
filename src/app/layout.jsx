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
		<body
			className={`${montserrat.variable} antialiased`}
		>
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
