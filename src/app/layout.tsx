import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saif Alam — Data Science & Applied Machine Learning",
  description:
    "Portfolio of Saif Alam: Applied Machine Learning, Data Science Pipelines, Predictive Modeling, and Production Systems.",
  keywords: [
    "Saif Alam",
    "Data Science",
    "Machine Learning",
    "Python",
    "Scikit-learn",
    "AWS",
    "ML Engineering",
  ],
  authors: [{ name: "Saif Alam" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#09090B]">
        {children}
      </body>
    </html>
  );
}
