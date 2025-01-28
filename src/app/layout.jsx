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
			<script
				dangerouslySetInnerHTML={{
				__html: `
					(function(w, d, s, l, i) {
					w[l] = w[l] || [];
					w[l].push({
						'gtm.start': new Date().getTime(),
						event: 'gtm.js'
					});
					var f = d.getElementsByTagName(s)[0],
						j = d.createElement(s),
						dl = l != 'dataLayer' ? '&l=' + l : '';
					j.async = true;
					j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
					f.parentNode.insertBefore(j, f);
					})(window, document, 'script', 'dataLayer', 'GTM-PJ59J72R');
				`,
				}}
			/>
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
